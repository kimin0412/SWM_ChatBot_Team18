const db = require('../../../libs/database/service/index');

exports.getBlock = async (body) => {
    
    const message = body['message'];
    const react_user_id = body['react_user_id'];

    // 소팅
    let users = await db.findAllUsers();
    users.sort((user1, user2)=>{
        if (!('themes' in user2) || !('romance' in user2['themes']) || !('score' in user2['themes']['romance'])){
            return 0
        }
        if (!('themes' in user1) || !('romance' in user1['themes']) || !('score' in user1['themes']['romance'])){
            return 0
        }
        const score1 = user1['themes']['romance']['score']
        const score2 = user2['themes']['romance']['score']
        const date1 = user1['themes']['romance']['dateCleared']
        const date2 = user1['themes']['romance']['dateCleared']
        if (score1 === score2){
            return date1 - date2
        }
        return score2 - score1   
    })
    
    // 필터링
    users = users.filter((user1)=>{
        if (!('themes' in user1) || !('romance' in user1['themes']) || !('score' in user1['themes']['romance'])){
            return false
        }
        if (user1['themes']['romance']['score']===0){
            return false
        }
        return true
    })
    
    // console.log(users)
    // 찾기
    let currentIndex = -1
    for(let i=0;i<users.length;i++){
        // console.log(users[i]['userId'])
        // console.log(react_user_id)
        if (users[i]['userId'] === String(react_user_id)){
            currentIndex = i
            break
        }
    }
    console.log('현재 인덱스 ' + String(currentIndex))
    let currentScore;
    let tmp = await db.findUser(react_user_id);
    let currentName = tmp['userName']
    if (currentIndex >= 0){
        currentScore = String(users[currentIndex]['themes']['romance']['score'])
        currentIndex = String(currentIndex+1)
    }else{
        currentScore = 'NOT YET'
        currentIndex = 'NOT YET'
    }
    
    console.log(tmp)
    console.log(currentIndex)
    console.log(currentScore)
    console.log(currentName)

    
	return {
        conversationId: message.conversation_id,
        text: '내 점수',
        blocks: [
            { 
				type: 'header', 
				text: '내 점수', 
				style: 'yellow' 
			},
            {
                type: 'description',
                term: '이름',
                content: { 
					type: 'text', 
					text: currentName, 
					markdown: false 
				},
                accent: true,
            },
            {
                type: 'description',
                term: '테마',
                content: { 
					type: 'text', 
					text: '연애', 
					markdown: false 
				},
                accent: true,
            },
            {
                type: 'description',
                term: '점수',
                content: { 
					type: 'text', 
					text: currentScore, 
					markdown: false 
				},
                accent: true,
            },
            {
                type: 'description',
                term: '현재순위',
                content: {
                    type: 'text',
                    text: currentIndex,
                    markdown: false,
                },
                accent: true,
            },
            {
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '명예의 전당',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'romance_hallOfFame',
						value: 'romance_hallOfFame',
					},
					{
						type: 'button',
						text: '테마 선택',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'game_start',
						value: 'game_start',
					},
				],
			},
        ],
    };
}; 