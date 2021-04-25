const libKaKaoWork = require("../../../libs/kakaoWork");

const intro = require('./blocks/intro');
const outtro = require('./blocks/outtro');

const question1 = require('./blocks/question/question1');
const question2 = require('./blocks/question/question2');
const question3 = require('./blocks/question/question3');
const question4 = require('./blocks/question/question4');
const question5 = require('./blocks/question/question5');

const hint1 = require('./blocks/hint/hint1');
const hint2 = require('./blocks/hint/hint2');
const hint3 = require('./blocks/hint/hint3');
const hint4 = require('./blocks/hint/hint4');
const hint5 = require('./blocks/hint/hint5');

const answerModal1 = require('./blocks/answer/answer1');
const answerModal2 = require('./blocks/answer/answer2');
const answerModal3 = require('./blocks/answer/answer3');
const answerModal4 = require('./blocks/answer/answer4');
const answerModal5 = require('./blocks/answer/answer5');

const check1 = require('./blocks/check/check1');
const check2 = require('./blocks/check/check2');
const check3 = require('./blocks/check/check3');
const check4 = require('./blocks/check/check4');
const check5 = require('./blocks/check/check5');

module.exports = {
	answerBuilder: (data) => {
		const { message, value } = data;
		
		switch (value) {
			case 'fantasy_answerModal1':
				return answerModal1();
            case 'fantasy_answerModal2':
				return answerModal2();
            case 'fantasy_answerModal3':
				return answerModal3();
            case 'fantasy_answerModal4':
				return answerModal4();
            case 'fantasy_answerModal5':
				return answerModal5();
		}
	},
	messageBuilder: async (data) => {
		const { message, actions, action_time, value, action_name } = data;
		console.log('messageBuilder');
		console.log(value);
		switch(value) {
			case 'intro':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...intro()
				});
				break;
			case 'question1':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...question1()
				});
				break;
			case 'question2':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...question2()
				});
				break;
			case 'question3':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...question3()
				});
				break;
			case 'question4':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...question4()
				});
				break;
			case 'question5':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...question5()
				});
				break;
			case 'outtro':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...outtro()
				});
				break;
			default:
		}
	},
	hintBuilder: async (data) => {
		const { message, actions, action_time, value, action_name } = data;
		
		switch(value) {			
			case 'hint1':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...hint1()
				});
				break;
			case 'hint2':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...hint2()
				});
				break;
			case 'hint3':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...hint3()
				});
				break;
			case 'hint4':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...hint4()
				});
				break;
			case 'hint5':
				await libKaKaoWork.sendMessage({
					conversationId: message.conversation_id,
					...hint5()
				});
				break;
		}
	},
	resultBuilder: async (data) => {
		const {message, actions, action_time, value, action_name} = data;
		let [thema, context] = value.split('_');
		console.log(data);
		switch(context) {
			case 'submission1':
				await libKaKaoWork.sendMessage({
						conversationId: message.conversation_id,
						...check1()
					});
				break;
			case 'submission2':
				await libKaKaoWork.sendMessage({
						conversationId: message.conversation_id,
						...check2()
					});
				break;
			case 'submission3':
				await libKaKaoWork.sendMessage({
						conversationId: message.conversation_id,
						...check3()
					});
				break;
			case 'submission4':
				await libKaKaoWork.sendMessage({
						conversationId: message.conversation_id,
						...check4()
					});
				break;
			case 'submission5':
				await libKaKaoWork.sendMessage({
						conversationId: message.conversation_id,
						...check5()
					});
				break;
		}
	}
}