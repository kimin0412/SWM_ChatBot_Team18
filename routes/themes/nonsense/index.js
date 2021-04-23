const libKakaoWork = require('../../../libs/kakaoWork');
// 정답 입력 블록
const answerModal1 = require('./blocks/nonsense_answer_1');
const answerModal2 = require('./blocks/nonsense_answer_2');
const answerModal3 = require('./blocks/nonsense_answer_3');
const answerModal4 = require('./blocks/nonsense_answer_4');
const answerModal5 = require('./blocks/nonsense_answer_5');
// 문제 블록
const quizMessage1 = require('./blocks/nonsense_quiz_1');
const quizMessage2 = require('./blocks/nonsense_quiz_2');
const quizMessage3 = require('./blocks/nonsense_quiz_3');
const quizMessage4 = require('./blocks/nonsense_quiz_4');
const quizMessage5 = require('./blocks/nonsense_quiz_5');
// 힌트 블록

// 안내사항
const notice = require('./blocks/notice');

// 오답 블록
const wrong_answer = require('./blocks/wrong_answer');

//마지막 블록
const lastmsg = require('./blocks/lastmsg');

module.exports = {
    modalBuilder: (data) => {
		const { message, value } = data;
		
		switch (value) {
			case 'nonsense_answer_1':
				return answerModal1();
            case 'nonsense_answer_2':
				return answerModal2();
            case 'nonsense_answer_3':
				return answerModal3();
            case 'nonsense_answer_4':
				return answerModal4();
            case 'nonsense_answer_5':
				return answerModal5();
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
            case 'nonsense_check_answer_1': // 정답은 answer폴더에 따로 관리 (git ignore 추가)
                if (actions.answer_word == '정답1'){
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
            case 'nonsense_check_answer_2':
                if (actions.answer_word == '정답2'){
                     await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...quizMessage3()
                });
                }
                else{
                    await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...wrong_answer()
                });
                }
                break;
            case 'nonsense_check_answer_3':
                if (actions.answer_word == '정답3'){
                     await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...quizMessage4()
                });
                }
                else{
                    await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...wrong_answer()
                });
                }
                break;
            case 'nonsense_check_answer_4':
                if (actions.answer_word == '정답4'){
                     await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...quizMessage5()
                });
                }
                else{
                    await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...wrong_answer()
                });
                }
                break;
            case 'nonsense_check_answer_5':
                if (actions.answer_word == '정답5'){
                     await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...lastmsg()
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