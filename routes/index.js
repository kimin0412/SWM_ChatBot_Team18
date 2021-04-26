const express = require('express');
const router = express.Router();

const libKakaoWork = require('../libs/kakaoWork');

const romanceMain = require('./themes/romance/main');
const romanceStage1Conversation = require('./themes/romance/stage1/conversation');
const romanceStage1Question = require('./themes/romance/stage1/question');
const romanceStage1Answer = require('./themes/romance/stage1/answer');
const romanceStage1Result = require('./themes/romance/stage1/result');
const romanceStage1Hint = require('./themes/romance/stage1/hint');

const romanceStage2Question = require('./themes/romance/stage2/question');
const romanceStage2Answer = require('./themes/romance/stage2/answer');
const romanceStage2Result = require('./themes/romance/stage2/result');

const romanceEnding = require('./themes/romance/ending');

router.get('/', async (req, res, next) => {
	// 유저 목록 검색 (1)
	const users = await libKakaoWork.getUserList();

	// 검색된 모든 유저에게 각각 채팅방 생성 (2)
	const conversations = await Promise.all(
		users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
	);

	// 생성된 채팅방에 메세지 전송 (3)
	const messages = await Promise.all([
		conversations.map((conversation) =>
			libKakaoWork.sendMessage({
				conversationId: conversation.id,
				text: '방탈출에 오신걸 환영합니다.',
				blocks: [
					{
						type: 'header',
						text: '온라인 방탈출에 오신 것을 환영',
						style: 'red',
					},
					{
						type: 'text',
						text: '이름을 입력해주세요.',
						markdown: true,
					},
					{
						type: 'button',
						text: '입력하기',
						style: 'default',
						action_type: 'call_modal',
						value: 'set_name',
					},
				],
			})
		),
	]);

	// 응답값은 자유롭게 작성하셔도 됩니다.
	res.json({
		result: true,
	});
});

router.post('/request', async (req, res, next) => {
	console.log(req.body);
	const { message, value } = req.body;

	switch (value) {
		case 'set_name':
			// 설문조사용 모달 전송 (3)
			return res.json({
				view: {
					title: '이름을 알려주세요.',
					accept: '확인',
					decline: '취소',
					value: 'user_name',
					blocks: [
						{
							type: 'label',
							text: '내 이름',
							markdown: true,
						},
						{
							type: 'input',
							name: 'input_name',
							required: true,
							placeholder: '이름을 입력해주세요.',
						},
					],
				},
			});
			break;

		case 'game_start':
			return res.json({
				view: {
					title: '이름을 알려주세요.',
					accept: '확인',
					decline: '취소',
					value: 'user_name',
					blocks: [
						{
							type: 'label',
							text: '내 이름',
							markdown: true,
						},
						{
							type: 'input',
							name: 'input_name',
							required: true,
							placeholder: '이름을 입력해주세요.',
						},
					],
				},
			});
			break;

		case 'romance_stage1_answer':
			return res.json(romanceStage1Answer.getBlock());
			break;

		case 'romance_stage2_answer':
			return res.json(romanceStage2Answer.getBlock());
			break;

		case 'romance_stage1_hint':
			return res.json(romanceStage1Hint.getBlock());
			break;

		default:
			if (value.includes('nonsense')) {
				return res.json({
					view: require('./themes/nonsense').modalBuilder(req.body),
				});
			}
			// call_modal의 요청값 문자열(value)에 detective가 포함되도록 설계해서
			// 추리 문제에 사용될 modal은 이 조건문 절에서 생성
			else if (value.includes('detective')) {
				return res.json({
					// modalBuilder 함수에 req.body를 전달에서 모듈에서 필요한 데이터를 사용할 수 있도록 함
					view: require('./themes/detective').modalBuilder(req.body),
				});
			}
			else if (value.includes('horror')) {
				return res.json({
					view: require('./themes/horror').modalBuilder(req.body),
				});
			}
			else if (value.includes('survival')){
				console.log("request survival");
				return res.json({
					view: require('./themes/survival').modalBuilder(req.body)
				});
			}
	}
	res.json({});
});

router.post('/callback', async (req, res, next) => {
	console.log(req.body);
	const { message, actions, action_time, value, action_name } = req.body;

	switch (value) {
		case 'user_name':
			// 설문조사 응답 결과 메세지 전송 (3)
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: '입력 완료!',
				blocks: [
					{
						type: 'text',
						text: '이름을 저장했습니다! 🎁',
						markdown: true,
					},
					{
						type: 'text',
						text: '*답변 내용*',
						markdown: true,
					},
					{
						type: 'description',
						term: '이름',
						content: {
							type: 'text',
							text: actions.input_name,
							markdown: false,
						},
						accent: true,
					},
					{
						type: 'description',
						term: '시간',
						content: {
							type: 'text',
							text: action_time,
							markdown: false,
						},
						accent: true,
					},
					{
						type: 'button',
						text: '☠️ 게임 시작하기 ☠️',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'game_start',
						value: 'game_start',
					},
				],
			});
			break;
		case 'game_start':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: '입력 완료!',
				blocks: [
					{
						type: 'header',
						text: '테마 종류',
						style: 'blue',
					},
					{
						type: 'text',
						text: '방탈출 테마를 선택해주세요.',
						markdown: true,
					},
					{
						type: 'button',
						text: '공포',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'horror_quiz_1',
						value: 'horror_quiz_1',

					},
					{
						type: 'button',
						text: '판타지',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'fantasy_msg',
						value: 'intro',
					},
					{
						type: 'button',
						text: '생존',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'survival',
						value: 'survival',
					},
					{
						type: 'button',
						text: '연애',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'romance_main',
						value: 'romance_main',
					},
					{
						type: 'button',
						text: '넌센스',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'nonsense_quiz_1',
						value: 'nonsense_quiz_1',
					},
					{
						type: 'button',
						text: '추리',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'detective_quiz_1',
						value: 'detective_quiz_1',
					},
				],
			});
			break;
	
		case 'romance_main':
			await libKakaoWork.sendMessage(romanceMain.getBlock(message));
			break;
		case 'romance_stage1_conversation':
			await libKakaoWork.sendMessage(romanceStage1Conversation.getBlock(message));
			break;
		case 'romance_stage1_question':
			await libKakaoWork.sendMessage(romanceStage1Question.getBlock(message));
			break;
		case 'romance_stage1_result':
			await libKakaoWork.sendMessage(romanceStage1Result.getBlock(message, actions));
			break;
		case 'romance_stage2_question':
			await libKakaoWork.sendMessage(romanceStage2Question.getBlock(message));
			break;
		case 'romance_stage2_result':
			await libKakaoWork.sendMessage(romanceStage2Result.getBlock(message, actions));
			break;
		case 'romance_ending':
			await libKakaoWork.sendMessage(romanceEnding.getBlock(message, actions));
			break;

		default:
			if (value.includes('nonsense')) {
				await require('./themes/nonsense').messageBuilder(req.body);
			}
			// submit_aciton의 결과값 문자열(value)에 detective가 포함되도록 설계해서
			// 추리 문제는 이 조건문 절에서 처리하도록 함
			else if (value.includes('detective')) {
				// messageBuilder 함수에 req.body를 전달해서 모듈에서 필요한 데이터 사용.
				// modal을 통해 제출한 값, react_user_id(답장을 보낸 사용자 고유 id)등 사용할 수 있음
				await require('./themes/detective').messageBuilder(req.body);
			} else if (value.includes('horror')) {
				await require('./themes/horror').messageBuilder(req.body);
			}
			else if(value.includes('survival')) {
				console.log("call back survival");
				await require('./themes/survival').messageBuilder(req.body);
			}

		// else
	}

	res.json({ result: true });
});

module.exports = router;