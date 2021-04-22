/**
 * TBD : 주석처리
*/

const libKakaoWork = require('../../../libs/kakaoWork');

const answerModal1 = require('./blocks/detective_answer_1');

const quizMessage1 = require('./blocks/detective_quiz_1');

module.exports = {
    modalBuilder: (data) => {
		const { message, value } = data;
		
		switch (value) {
			case 'detective_answer_1':
				return answerModal1();
		}
	},
    messageBuilder: async (data) => {
        const { message, actions, action_time, value, action_name } = data;
        
		switch (value) {
            case 'detective_quiz_1':
                await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...quizMessage1()
                });
                break;
            default:
        }
    },
};