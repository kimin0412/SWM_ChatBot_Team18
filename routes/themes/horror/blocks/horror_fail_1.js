module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
	return {
		text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: 'text',
				text: "당신은 작은 인기척에 놀라 서둘러 소마센터를 빠져나옵니다.",
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
				text: '돌아가기',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_quiz_1',
				value: 'horror_quiz_1'
			},
		],
	};
	
};