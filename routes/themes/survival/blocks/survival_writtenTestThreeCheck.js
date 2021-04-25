module.exports = (data) => {
	const answer = data.actions.survival_writtenTestThreeModal;
	if(answer ==  '3'){
		return {
			text: '필기 시험 3번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '필기 시험 3번 문제 결과',
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
						'*정답입니다!*\n\n차량의 사이드미러는 모두 운전자석에 앉은 운전자에 알맞게 설정합니다.',
					markdown: true,
				},
				{
					type: 'button',
					text: '다음으로',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_afterWrittenTestBlock',
					value: 'survival_afterWrittenTestBlock',
				},
			],
		};
	}
	else{
		return{
			text: '필기 시험 3번 문제 결과',
			blocks: [
				{
					type: 'header',
					text: '필기 시험 3번 문제 결과',
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
					text: '*틀렸습니다!*\n\n조수석에서 사이드미러를 확인할 필요가 있던가??',
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 풀기',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'survival_writtenTestThreeBlock',
					value: 'survival_writtenTestThreeBlock',
				},
			],
		};
	}
};