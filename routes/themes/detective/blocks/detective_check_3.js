/**
 * 매개변수를 통해 정답 체크 후 정답 여부에 따라 다른 블록 생성
 * 정답 메세지의 경우 버튼이 다음 단계의 메세지를 호출하도록
 * 오답 메세지의 경우 버튼이 이번 단계의 메세지를 다시 호출하도록 설정
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data
	
	if (actions.answer == '11') {
		return {
			text: '방탈출 - 추리 테마',
			blocks: [
				{
					type: 'text',
					text:
						`무사히 열린 컨테이너를 두고 당신은 안도의 한숨을 쉰다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"덕분에 수고를 덜었군."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`순간 둔탁한 소리와 함께 당신은 쓰러진다. 당신을 조롱하는 소리가 희미하게 들려온다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"산 채로 바다에 수장되는 것 보단 편할거다. 하하하."`,
					markdown: true,
				},
				{
					type: 'button',
					text: '다음으로..? 💀',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'detective_quiz_4',
					value: 'detective_quiz_4'
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
						`번호를 입력하자 잠금장치로부터 스파크가 튀어오른다. 장치는 더이상 작동하지 않는 것으로 보인다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"..... 뭐, 어쩔 수 없겠군. 전기톱으로라도 열어야지. 얘들아 탐정 나리는 보내드려라."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`당신은 바다를 향해 거칠게 끌려간다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '틀렸습니다... 🌊💀',
					style: 'danger',
					action_type: 'submit_action',
					action_name: 'detective_quiz_3',
					value: 'detective_quiz_3'
				},
			],
		};
	}
};