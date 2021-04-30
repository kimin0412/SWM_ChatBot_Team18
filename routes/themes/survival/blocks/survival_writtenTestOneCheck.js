module.exports = (data) => {
	const answer = data.actions.survival_writtenTestOneModal;
	if(answer ==  '4'){
		return {
			text: '필기 시험 1번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '필기 시험 1번 문제 결과',
					style: 'blue'
				},
				{
					type: 'divider',
				},
				{
					type: 'image_link',
					url: 'https://i.ibb.co/wpn74sQ/survival-test-Right.jpg',
				},
				{
					type: 'text',
					text: '*정답입니다!*\n\n대부분의 사람들은 오른발로 엑셀과 브레이크를 조절한다고 합니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음 문제 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_writtenTestTwoBlock',
					value: 'survival_writtenTestTwoBlock',
				},
			],
		};
	}
	else{
		return {
			text: '필기 시험 1번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '필기 시험 1번 문제 결과',
					style: 'blue'
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
					text: '*틀렸습니다!*\n\n음.. 실제로 운전할 때에 양발을 사용했었던가..?',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_writtenTestOneBlock',
					value: 'survival_writtenTestOneBlock',
				},
			],
		};
	}
};