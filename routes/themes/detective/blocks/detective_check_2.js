/**
 * 매개변수를 통해 정답 체크 후 정답 여부에 따라 다른 블록 생성
 * 정답 메세지의 경우 버튼이 다음 단계의 메세지를 호출하도록
 * 오답 메세지의 경우 버튼이 이번 단계의 메세지를 다시 호출하도록 설정
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data
	
	if (actions.answer == 'greece') {
		return {
			text: '방탈출 - 추리 테마',
			blocks: [
				{
					type: 'text',
					text:
						`"허허허 탐정 선생 역시 머리가 비상하구만!"`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`호탕한 웃음소리와 함께 성대한 배웅을 받으며 당신은 다음 목적지로 향한다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '그리스 아테네로 🛫',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'detective_quiz_3',
					value: 'detective_quiz_3'
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
						`당신이 대답하자 사람좋게 웃던 그들의 표정이 일순간 굳어졌다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`잠깐의 정적 후 한 사람이 자리에서 일어나 출입문을 향해 걸어간다. 그는 차가운 쇳소리를 내며 문을 잠근다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '틀렸습니다... 💀',
					style: 'danger',
					action_type: 'submit_action',
					action_name: 'detective_quiz_2',
					value: 'detective_quiz_2'
				},
			],
		};
	}
};