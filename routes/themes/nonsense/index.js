const libKakaoWork = require('../../../libs/kakaoWork');
// 정답 입력 블록
const answerModal1 = require('./blocks/nonsense_answer_1');


// 문제 블록
const quizMessage1 = require('./blocks/nonsense_quiz_1');
const quizMessage2 = require('./blocks/nonsense_quiz_2');

// 힌트 블록

// 안내사항
const notice = require('./blocks/notice');

// 오답 블록
const wrong_answer = require('./blocks/wrong_answer');

module.exports = {
    modalBuilder: (data) => {
		const { message, value } = data;
		
		switch (value) {
			case 'nonsense_answer_1':
				return answerModal1();
		}
	},
    messageBuilder: async (data) => {
        const { message, actions, action_time, value, action_name } = data;
        
		switch (value) {
            case 'nonsense_quiz_1':
                 await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...notice()
                });
                await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...quizMessage1()
                });
                break;
            case 'nonsense_check_answer_1':
                if (actions.answer_word == '정답'){
                     await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...quizMessage2()
                });
                }
                else{
                    await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...wrong_answer()
                });
                }
                break;
            default:
        }
    },
};