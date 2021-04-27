module.exports = (data) => {
	const answer = data.actions.survival_functionTestThreeModal;
	if (answer == '4') {
		return {
			text: '기능 시험 3번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '기능 시험 3번 문제 결과',
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
					text:
						'*정답입니다!*\n\n운전면허 기능시험에서 돌발은 일단정지 후 비상등 점등입니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음으로',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_afterFunctionTestBlock',
					value: 'survival_afterFunctionTestBlock',
				},
			],
		};
	}
	else {
		return {
			text: '기능 시험 3번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '기능 시험 3번 문제 결과',
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
						'*틀렸습니다!*\n\n현실에서라면 정답이 될 가능성이 조금이라도 있겠지만.. 이건 면허시험이었지?',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_functionTestThreeBlock',
					value: 'survival_functionTestThreeBlock',
				},
			],
		};
	}
};