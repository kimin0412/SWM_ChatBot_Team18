module.exports = (data) => {
	const answer = data.actions.survival_functionTestTwoModal;
	if (answer == '1') {
		return {
			text: '기능 시험 2번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '기능 시험 2번 문제 결과',
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
						'*정답입니다!*\n\n좌측 방향 지시등을 켜기 위해서는 좌측 레버를 내려야합니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음 문제 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_functionTestThreeBlock',
					value: 'survival_functionTestThreeBlock',
				},
			],
		};
	}
	else {
		return {
			text: '기능 시험 2번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '기능 시험 2번 문제 결과',
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
						'*틀렸습니다!*\n\n음.. 좌회전을 하려면 핸들을 좌측으로 돌려야겠지..? 이것과 레버 방향이 같다는건..',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_functionTestTwoBlock',
					value: 'survival_functionTestTwoBlock',
				},
			],
		};
	}
};