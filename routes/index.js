const express = require('express');
const router = express.Router();
const libKakaoWork = require('../libs/kakaoWork');

const survivalGameProcessor = require('../survival/survivalGameProcess'); // 생존 게임이 선택되었을 경우 처리하는 곳
const survivalBlocks = require('../survival/block'); // 미리 작성된 시나리오 블록 가져오기
var survivalGameSelected = 0; // 생존 게임이 선택되었으면 1, 아니면 0

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
				text: '온라인 방탈출 초대 메시지',
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
	
	if(survivalGameSelected){
		try{
			return survivalGameProcessor.survivalGameProcessRequest(req, res);
		}
		catch(e){
			console.log('survival request error!')
			console.log(e);
		}
	}
	
	else{
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


			default:
		}
	}
	res.json({});
});

router.post('/callback', async (req, res, next) => {
	console.log(req.body);
	const { message, actions, action_time, value } = req.body;

	if(survivalGameSelected){
		try{
			survivalGameProcessor.survivalGameProcessCallback(req, res);
		}
		catch(e){
			console.log('survival callback error!')
			console.log(e);
		}
	}
	else{
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
			// 이하 생존 게임 시나리오
			case 'game_start':
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '게임 선택!',
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
						},
						{
							type: 'button',
							text: '추리',
							style: 'default',
						},
						{
							type: 'button',
							text: '판타지',
							style: 'default',
						},
						{
							type: 'button',
							text: '넌센스',
							style: 'default',
						},
						{
							type: 'button',
							text: '연애',
							style: 'default',
						},
						{
							type: 'button',
							text: '생존',
							style: 'default',
							action_type: 'submit_action',
							action_name: 'survivalGameSelected',
							value: 'survivalGameSelected',
						},
					],
				});
				break;

			case 'survivalGameSelected':
				survivalGameSelected = 1;
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: 'survival 게임이 선택되었습니다.',
					blocks: survivalBlocks.gameStartBlock,
				});
				break;

			default:
		}
	}

	res.json({ result: true });

});

module.exports = router;