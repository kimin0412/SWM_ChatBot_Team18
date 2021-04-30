module.exports = (data) => {
	const answer = data.actions.survival_drivingTestOneModal;
	if (answer == '3') {
		return {
			text: '주행 시험 1번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '주행 시험 1번 문제 결과',
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
						'*정답입니다!*\n\n올바른 차선변경 순서는 방향지시등 켜기 - 차량 확인 - 차선 변경 - 방향지시등 끄기의 순서입니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음으로',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_drivingTestAddProblemOneBlock',
					value: 'survival_drivingTestAddProblemOneBlock',
				},
			],
		};
	} else {
		return {
			text: '주행 시험 1번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '주행 시험 1번 문제 결과',
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
						'*틀렸습니다!*\n\n음.. 먼저 내가 차선을 변경할 것이라고 방향 지시등을 통해 알리는 게 먼저겠지?',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_drivingTestFourBlock',
					value: 'survival_drivingTestFourBlock',
				},
			],
		};
	}
};