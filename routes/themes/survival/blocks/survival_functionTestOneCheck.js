module.exports = (data) => {
	const answer = data.actions.survival_functionTestOneModal;
	if (answer == '2') {
		return {
			text: '기능 시험 1번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '기능 시험 1번 문제 결과',
					style: 'blue',
				},
				{
					type: 'divider',
				},
				{
					type: 'image_link',
					url:
						'https://i.ibb.co/wpn74sQ/survival-test-Right.jpg',
				},
				{
					type: 'text',
					text: '*정답입니다!*\n\n출발 전에 안전벨트를 하지 않으면 바로 실격처리됩니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음 문제 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_functionTestTwoBlock',
					value: 'survival_functionTestTwoBlock',
				},
			],
		};
	} else {
		return {
			text: '기능 시험 1번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '기능 시험 1번 문제 결과',
					style: 'blue',
				},
				{
					type: 'divider',
				},
				{
					type: 'image_link',
					url: 'https://i.ibb.co/qJxsPBg/survival-test-Wrong.jpg',
				},
				{
					type: 'text',
					text:
						'*틀렸습니다!*\n\n물론 이것도 엄청 중요하지만..! 잊어버린 이것을 하지 않으면 목숨이 위험했던 것 같아..',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_functionTestOneBlock',
					value: 'survival_functionTestOneBlock',
				},
			],
		};
	}
};