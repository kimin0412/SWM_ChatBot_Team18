/**
 * 매개변수를 통해 정답 체크 후 정답 여부에 따라 다른 블록 생성
 * 정답 메세지의 경우 버튼이 다음 단계의 메세지를 호출하도록
 * 오답 메세지의 경우 버튼이 이번 단계의 메세지를 다시 호출하도록 설정
*/
const Config = require('config');

module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data
	
	let correct = true;
	
	if (actions.answer1 != Config.detective.answers.ans5[0]) {
		correct = false;
	}
	if (actions.answer2 != Config.detective.answers.ans5[1]) {
		correct = false;
	}
	if (actions.answer3 != Config.detective.answers.ans5[2]) {
		correct = false;
	}
	
	if (correct) {
		return {
			text: '방탈출 - 추리 테마',
			blocks: [
				{
					type: 'text',
					text:
						`당신은 그의 미소가 미세하게 평소보다 커진 것을 알아차린다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"이런, 덕분에 할 일이 많아지겠군요. 감사합니다. 수고 많으셨습니다."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`가벼운 엄살과 함께 그는 당신에게 감사의 인사를 전한다. 그리고 눈에 익은 작은 상자를 꺼내 당신에게 건낸 후 자리를 떠난다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"이건, 하나가 남았더군요. 약속한대로 드리도록 하겠습니다."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`당신은 건내받은 상자를 병상 옆 탁자에 올려둔 채 다시 책을 읽기 시작한다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '사건 종료 🔎✨',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'detective_end',
					value: 'detective_end'
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
						`"그렇군요..."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`남자는 여전히 특유의 부드러운 미소를 지닌 채 당신을 쳐다보며 말한다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"아무튼 좀 더 푹 쉬도록 하세요. 보상은 천천히 드리도록 하겠습니다."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`그리고 당신은 더이상 그를 볼 수 없었다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '틀렸습니다... 💀',
					style: 'danger',
					action_type: 'submit_action',
					action_name: 'detective_quiz_5',
					value: 'detective_quiz_5'
				},
			],
		};
	}
};