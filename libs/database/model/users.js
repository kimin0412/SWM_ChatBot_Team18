
// User Model 정의

const mongoose = require('mongoose')

/** 테마별 공통 필드 */
const themeFields = {
	/** 해당 테마 클리어 여부 */
	isCleared: {
		type: Boolean,
		default: false
	},
	/** 해당 테마 클리어 시각 */
	dateCleared: {
		type: Date,
		index: {unique: false}
	}
}

/** 유저 스키마 */
const userSchema = new mongoose.Schema({
	/** 사용자 고유 번호 (react_user_id) */
	userId: {
		type: String,
		required: true,
		unique: true
	},
	/** 사용자 이름 (최초 message에서 설정) */
	userName: {
		type: String,
		required: true
	},
	themes: {
		detective: {
			...themeFields
		},
		fantasy: {
			...themeFields
		},
		horror: {
			...themeFields
		},
		nonsense: {
			...themeFields
		},
		romance: {
			...themeFields, 
			score: {
				type: Number,
				default: 0,
				index: { unique: false }
			},
            romance_passed: {
                type: Number,
                default: 0
            }
		},
		survival: {
			...themeFields
		}
	}
})

/** 모든 유저 리스트 */
userSchema.static('findAll', function(callback) {
	return this.find({ }, callback);
});

/** 사용자 모델 객체 */
module.exports = mongoose.model('User', userSchema);