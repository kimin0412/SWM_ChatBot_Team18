module.exports = (data) => {
	const answer = data.actions.survival_writtenTestTwoModal;
	if(answer ==  '3'){
		return {
			text: '필기 시험 2번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '필기 시험 2번 문제 결과',
					style: 'blue'
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
						'*정답입니다!*\n\nP는 Parking으로 주차 시에, N은 Neutral로 신호 대기나 자동세차 시에 사용합니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음 문제 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_writtenTestThreeBlock',
					value: 'survival_writtenTestThreeBlock',
				},
			],
		};
	}
	else{
		return{
			text: '필기 시험 2번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '필기 시험 2번 문제 결과',
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
						'*틀렸습니다!*\n\n으음..일단.. 주차(Parking) 시에는 엑셀을 밟아도 절대 움직이면 안 되겠지..?',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_writtenTestTwoBlock',
					value: 'survival_writtenTestTwoBlock',
				},
			],
		};
	}
};