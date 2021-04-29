/** Users 모델 */
const Users = require('../model/users');

module.exports = {
    /**
     * 유저 이름을 저장합니다. 이미 등록된 유저의 경우 이름만 교체됩니다. (Upsert)
     * @param {String} reactUserId 반응한 유저의 KakaoWork 고유 ID
     * @param {String} newUserName 새 유저 이름
     * @returns 새로 등록/변경된 유저 정보를 json 형태로 반환합니다.
     */
    insertUser: async function (reactUserId, newUserName) {
        try {
            const user = await Users.findOneAndUpdate({ // filter
                userId: reactUserId
            }, {    // update
                userName: newUserName
            }, {
                new: true,      // Query 결과 객체를 반환
                upsert: true,   // Insert Or Update
            }).lean();          // Document를 JSON 형식으로 변환

            return user
        }
        catch (err) {
            return dbServiceError(err);
        }
    },
    /**
     * 사용자 ID로 유저를 찾습니다.
     * @param {String} reactUserId 사용자 ID
     * @returns ID를 통해 찾은 유저 정보를 json 형태로 반환합니다.  
     * { userId : `String`, userName : `String`, themes : `Array` }  
     * ex) rtVal.userName; // 사용자가 등록한 이름 참조
     */
    findUser: async function (reactUserId) {
        try {
            const user = await Users.findOne({ // filter
                userId: reactUserId
            }).lean();

            if (!user) {    // Not found
                return dbServiceError('유저를 찾지 못했습니다.');
            }
			
            return user
        }
        catch (err) {
            return dbServiceError(err);
        }
    },
	/**
	 * DB에 등록된 모든 유저 리스트를 반환합니다.
	 */
	findAllUsers: async function () {
		try {
			const users = Users.find({}).lean();
			
			return users
		}
		catch (err) {
            return dbServiceError(err);
		}
	},
    /**
     * 테마 클리어 정보를 저장합니다.  
     * 함수가 호출된 시점을 기준으로 Database에 테마 클리어 시각을 기록합니다.  
     * 유저별로 최초 클리어 시점만 기록됩니다. (같은 테마 여러번 클리어 해도 최초 시점만 기록)
     * @param {String} reactUserId 사용자 ID
     * @param {String} theme 클리어한 테마 `'detective'` || `'fantasy'` || `'horror'` || `'nonsense'` || `'romance'` || `'survival'`  
     * @returns 새로 등록/변경된 유저 정보를 json 형태로 반환합니다.
     */
    clearTheme: async function (reactUserId, theme) {
        if (!checkThemeParameter(theme)) {
            return null;
        }

        try {
            const user = await Users.findOne({ // filter
                userId: reactUserId
            });
			
			// isCleared 체크해서 최초 클리어시에만 반영되도록
			if (!user['themes'][theme].isCleared) {
				user['themes'][theme] = {
					isCleared : true,
					dateCleared : Date.now()
				}
				user.markModified('themes.' + theme)
			}
			

            // DB에 저장
            await user.save();

            return user.toObject();
        } catch (err) {
            return dbServiceError(err);
        }
    },
    /**
     * 테마별 데이터를 업데이트합니다. newData를 통해 객체 형식으로 전달하시면 됩니다.  
     * 객체의 property는 User Model에서 정의한 필드 이름과 같아야합니다.
     * @param {String} reactUserId 사용자 ID
     * @param {String} theme 클리어한 테마 `'detective'` || `'fantasy'` || `'horror'` || `'nonsense'` || `'romance'` || `'survival'`  
     * @param {Object} newData 새로 업데이트할 테마별 데이터
     * @param {Boolean} increase true로 지정할 시 데이터를 변경하지 않고 기존 데이터값에 새로 더합니다.  
     * ex. 기존 점수 30, `newData === { score: 20 }` 일 때,  
     * increase가 true이면 결과 점수는 50. increase가 false이면 결과 점수는 20
     * @returns 새로 등록/변경된 유저 정보를 json 형태로 반환합니다.
     */
    updateThemeInfo: async function (reactUserId, theme, newData, increase) {
        increase = increase || false;

        if (!checkThemeParameter(theme)) {
            return null;
        }

        try {
            // DB 탐색
            const user = await Users.findOne({
                userId: reactUserId
            });
            
            
            /*
            로맨스 테마일 때 최신 점수만 반영함
            */
            if ('romance_passed' in newData){
                console.log('로맨스 테마일 때')
                if (reactUserId == '2607851' && !increase){
                    console.log('관리자 점수 초기화')
                    user['themes']['romance']['romance_passed'] = newData['romance_passed']
                    user['themes']['romance']['score'] = newData['score']
                    user['themes']['romance']['dateCleared'] = Date.now()
                    user.markModified('themes.' + theme)
                    await user.save()
                    return user.toObject()
                }
                if (newData['romance_passed'] > user['themes']['romance']['romance_passed']){
                    console.log('사용자 점수 수정')
                    user['themes']['romance']['romance_passed'] = newData['romance_passed']
                    user['themes']['romance']['score'] += newData['score']
                    user['themes']['romance']['dateCleared'] = Date.now()
                    user.markModified('themes.' + theme)
                    await user.save()
                }
                console.log('종료')
                return user.toObject()
            }

            
            // 데이터 업데이트
            if (increase) {
                // 데이터 increasement
                for (const [key, value] of Object.entries(newData)) {
                    user['themes'][theme][key] += value
                }
            }
            else {
                // 데이터 replacement
                user['themes'][theme] = newData;
            }
			
			user.markModified('themes.' + theme)

            // DB에 저장
            await user.save();

            return user.toObject();
        } catch (err) {
            return dbServiceError(err);
        }
    },
	/** 
	 * 테마별 랭킹 리스트를 가져옵니다.
     * @param {String} theme 테마 `'detective'` || `'fantasy'` || `'horror'` || `'nonsense'` || `'romance'` || `'survival'` 
	 */
	getThemeRank: async function (theme) {
		if (!checkThemeParameter(theme)) {
            return null;
        }
		
		try {
			const queryFilter = "themes." + theme + ".isCleared"
			const sortFilter = "themes." + theme + ".dateCleared"
			
			// 해당 theme의 isCleared가 true user 리스트를 찾아 dateCleared 기준 오름차순으로 sorting
			const ranking = await Users.find({
				[queryFilter]: true
			}).sort({[sortFilter]: 1}).lean();
			
			return ranking
		}
		catch (err) {
			return dbServiceError(err)			
		}
	},
	/** 
	 * 유저의 해당 테마 랭킹을 얻어옵니다.
     * @param {String} reactUserId 유저 아이디
     * @param {String} theme 테마 `'detective'` || `'fantasy'` || `'horror'` || `'nonsense'` || `'romance'` || `'survival'` 
	 */
	getThemeUserRank: async function (reactUserId, theme) {
		if (!checkThemeParameter(theme)) {
            return null;
        }
		
		try {
			const queryFilter = "themes." + theme + ".dateCleared"
			
			// 해당 유저를 찾아 해당 테마의 dateCleared 값 구한 뒤,
			// 유저의 dateCleared보다 빠른 유저의 수 구한 다음 + 1 리턴
			const user = await Users.findOne({
				userId: reactUserId
			}).lean();
			
			if (!user['themes'][theme]['isCleared']) {
				return dbServiceError('해당 유저가 테마를 클리어하지 않았습니다.')
			}
			
            const rank = await Users.find({
                [queryFilter]: { $gt: user['themes'][theme].dateCleared }
            }).count();
			
			return rank + 1
		}
		catch (err) {
			return dbServiceError(err)			
		}
	}
}

/**
 * 테마별 데이터 수정 시 파라미터가 바르게 전달되었는지 확인
 * @param {*} theme 
 * @returns 
 */
function checkThemeParameter(theme) {
    const possibleThemes = [
        'detective',
        'fantasy',
        'horror',
        'nonsense',
        'romance',
        'survival'
    ]

    // 잘못된 theme parameter
    if (!possibleThemes.includes(theme)) {
        return dbServiceError('\nMethod clearTheme() Error : ' + '\n다음 문자열 중 하나를 인수로 전달해주세요.' + '\n`detective` || `fantasy` || `horror` || `nonsense` || `romance` || `survival`');
    }
    else {
        return true
    }
}

/**
 * 에러처리
 * @param {*} err 
 * @returns 
 */
function dbServiceError (err) {
    console.log(err);
    return null;
}