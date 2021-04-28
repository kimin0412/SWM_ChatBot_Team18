module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
	console.log(actions.answer);
	if (actions.answer == "LISTEN" || actions.answer == "listen") {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: `"띠로롱"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "정답을 입력하고 엔터를 누르자 부팅음과 함께 화면이 밝아집니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'클로버, 하트, 다이아몬드, 스페이드의 영어에서 글자 위치로 찾을 수 있었어..!'`,
					markdown: true,
				},
				{
					type: "divider"
				},
				{
					type: "image_link",
					url: "https://ifh.cc/g/EYF1La.jpg"
				},
				{
					type: "divider"
				},
				{
					type: 'text',
					text: "당신은 켜진 노트북의 바탕화면을 살펴보다가 문서를 하나 발견합니다.",
					markdown: true,
				},
				{
					type: 'button',
					text: '열까 말까...',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_block_3',
					value: 'horror_block_3',
				},
			],
		};	
	}
	else {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: `"삐빅"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "비밀번호가 틀렸던 건지 노트북에서 날카로운 경고음이 들립니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "인상을 찌푸리며 노트북 화면의 카드를 노려보던 당신은 이내 단념한 듯 발걸음을 돌립니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'그래... 괜히 함부로 건드리지 말자...'`,
					markdown: true,
				},
				{
					type: 'text',
					text: "당신은 아침에 다시 와야겠다고 생각하며 소마센터를 떠납니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "홀로 남겨진 지갑이 어른거리지만 어쩔 수 없었습니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "지갑찾기 실패...",
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀어보기',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_quiz_3',
					value: 'horror_quiz_3'
				},
			],
		};
	}
};