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
						'https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg',
				},
				{
					type: 'text',
					text:
						'*정답입니다!*\n\n올바른 차선변경 순서는 방향지시등 켜기 - 차량 확인 - 차량 변경 - 방향지시등 끄기의 순서입니다.',
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
					url: 'https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg',
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