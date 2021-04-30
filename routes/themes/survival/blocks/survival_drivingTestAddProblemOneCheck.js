module.exports = (data) => {
	const answer = data.actions.survival_drivingTestAddProblemOneModal;
	if (answer == '2') {
		return {
			text: '주행 시험 2번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '주행 시험 2번 문제 결과',
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
						'*정답입니다!*\n\n 비상등을 잠시 켰다가 끄는 행위은 운전자들 사이에서 사과와 고마움의 표시로 여겨집니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음 문제 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_drivingTestAddProblemTwoBlock',
					value: 'survival_drivingTestAddProblemTwoBlock',
				},
			],
		};
	} else {
		return {
			text: '주행 시험 2번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '주행 시험 2번 문제 결과',
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
						'*틀렸습니다!*\n\n음.. 운전 중에는 몸이 아닌 자동차로 이야기하는 것이라고 들었는데.. 자동차로 미안함과 고마움을 표현할 방법이 뭐지..?',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_drivingTestAddProblemOneBlock',
					value: 'survival_drivingTestAddProblemOneBlock',
				},
			],
		};
	}
};