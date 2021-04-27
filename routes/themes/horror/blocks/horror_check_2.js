module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
	console.log(actions.answer);
	if (actions.answer == "here" || actions.answer == "HERE") {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: `"철컥"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "회의실의 잠금장치가 열리는 소리가 납니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'흰색, 파란색, 빨간색, 노란색을 영어로 바꾸고 적힌 숫자의 철자였네..'`,
					markdown: true,
				},
				{
					type: "divider"
				},
				{
					type: "image_link",
					url: "https://ibb.co/vjPz5yG.jpg"
				},
				{
					type: "divider"
				},
				{
					type: 'text',
					text: "당신은 회의실 문을 천천히 엽니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "여전히 캄캄한 내부와 사람의 온기가 없는 싸늘한 공기에 당신은 침을 꿀꺽 삼킵니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'지갑이... 이쪽에 있었을텐데...'`,
					markdown: true,
				},
				{
					type: 'text',
					text: "그 때, ",
					markdown: true,
				},
				{
					type: "divider"
				},
				{
					type: 'text',
					text: `"흐히"`,
					markdown: true,
				},
				{
					type: "divider"
				},
				{
					type: 'text',
					text: "열심히 지갑을 찾던 당신의 뒤로 작은 웃음소리가 울려퍼집니다.",
					markdown: true,
				},
				{
					type: 'button',
					text: '웃음소리...?',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_block_2',
					value: 'horror_block_2',
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
					text: "삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑",
					markdown: true,
				},
				{
					type: 'text',
					text: "비밀번호가 틀렸던 건지 조용하던 건물에 경고음 소리가 울려퍼집니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "머리까지 꽂히는 날카로운 경고음에 당신은 아찔해집니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'아씨...'`,
					markdown: true,
				},
				{
					type: 'text',
					text: "어쩔 줄 몰라하던 당신은 이윽고 계단으로 빠르게 내려갑니다.",
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
					action_name: 'horror_quiz_2',
					value: 'horror_quiz_2'
				},
			],
		};
	}
};