module.exports = (data) => {
	const answer = data.actions.survival_drivingTestAddProblemTwoModal;
	if (answer == '1') {
		return {
			text: '주행 시험 3번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '주행 시험 3번 문제 결과',
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
						'*정답입니다!*\n\n가솔린 차에는 휘발유를 넣고, 디젤 차에는 경유를 넣습니다.\n',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음으로',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_drivingTestEndBlock',
					value: 'survival_drivingTestEndBlock',
				},
			],
		};
	} else {
		return {
			text: '주행 시험 3번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '주행 시험 3번 문제 결과',
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
						'*틀렸습니다!*\n\n 가솔린.. 디젤..? 분명 어디서 많이 들어봤는데? *글자 수*로 외우면 편하다고 했던 것 같아.\n',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_drivingTestAddProblemTwoBlock',
					value: 'survival_drivingTestAddProblemTwoBlock',
				},
			],
		};
	}
};