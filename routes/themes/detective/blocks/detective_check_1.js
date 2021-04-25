/**
 * 매개변수를 통해 정답 체크 후 정답 여부에 따라 다른 블록 생성
 * 정답 메세지의 경우 버튼이 다음 단계의 메세지를 호출하도록
 * 오답 메세지의 경우 버튼이 이번 단계의 메세지를 다시 호출하도록 설정
*/
const Config = require('config');

module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	if (actions.answer == Config.detective.answers.ans1) {
		return {
			text: '방탈출 - 추리 테마',
			blocks: [
				{
					type: 'text',
					text:
						`"역시 소문대로시군요." 남자는 말한다. "조언 하나 드리자면 이제부터 신속히 움직이시는게 좋을 겁니다."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`급한 일인가? 당신은 의아해하며 질문한다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"제 보스는 철두철미하신 분입니다. 당신 말고도 수많은 이들에게 사람을 보내셨죠. 그러니..."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`속았군. 그의 말이 채 끝나기도 전에 상황을 이해한 당신은 서둘러 사무소를 빠져나간다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '다음으로 🛫',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'detective_quiz_2',
					value: 'detective_quiz_2'
				},
			],
		};	
	}
	else {
		return {
			text: '방탈출 - 추리 테마',
			blocks: [
				{
					type: 'text',
					text:
						`당신은 결정한 행선지를 자신있게 의뢰인에게 말한다. 여전히 부드러운 미소를 지은 채 아무 대꾸도 하지 않는 남자를 뒤로하고 당신은 사무소를 나선다.`,
					markdown: true,
				},
				{
					type: 'image_link',
					url: 'https://i.ibb.co/LCvrjKY/wrong-1.jpg',
				},
				{
					type: 'text',
					text:
						`목적지에 도착한 당신은 경계심 없이 건물 안으로 들어간다. 그리고 둔탁한 소리와 함께 당신은 쓰러진다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '틀렸습니다... 💀',
					style: 'danger',
					action_type: 'submit_action',
					action_name: 'detective_quiz_1',
					value: 'detective_quiz_1'
				},
			],
		};
	}
};