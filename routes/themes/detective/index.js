/**
 * TBD : 주석처리
*/

const libKakaoWork = require('../../../libs/kakaoWork');

const answerModal1 = require('./blocks/detective_answer_1');
const hintMessage1 = require('./blocks/detective_hint_1');
const quizMessage1 = require('./blocks/detective_quiz_1');
const checkMessage1 = require('./blocks/detective_check_1');

const answerModal2 = require('./blocks/detective_answer_2');
const hintMessage2 = require('./blocks/detective_hint_2');
const quizMessage2 = require('./blocks/detective_quiz_2');
const checkMessage2 = require('./blocks/detective_check_2');

const answerModal3 = require('./blocks/detective_answer_3');
const hintMessage3 = require('./blocks/detective_hint_3');
const quizMessage3 = require('./blocks/detective_quiz_3');
const checkMessage3 = require('./blocks/detective_check_3');

const answerModal4 = require('./blocks/detective_answer_4');
const hintMessage4 = require('./blocks/detective_hint_4');
const quizMessage4 = require('./blocks/detective_quiz_4');
const checkMessage4 = require('./blocks/detective_check_4');

const answerModal5 = require('./blocks/detective_answer_5');
const hintMessage5 = require('./blocks/detective_hint_5');
const quizMessage5 = require('./blocks/detective_quiz_5');
const checkMessage5 = require('./blocks/detective_check_5');

module.exports = {
    modalBuilder: (data) => {
		const { message, value, react_user_id } = data;
		
		switch (value) {
			case 'detective_answer_1':
				return answerModal1(react_user_id);
		}
	},
    messageBuilder: async (data) => {
        const { message, actions, action_time, value, action_name, react_user_id } = data;
		
        
		switch (value) {
            case 'detective_quiz_1':
                await libKakaoWork.sendMessage({
                    conversationId: message.conversation_id,
                    ...quizMessage1()
                });
                break;
			case 'detective_hint_1':
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					...hintMessage1()
				});
				break;
			case 'detective_check_1':
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					...checkMessage1(actions.answer_choice)
				})
            default:
        }
    },
};