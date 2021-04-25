module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '판타지 1층: TombStone',
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'소마의 탑을 찾아가니 으스스한 분위기의 건물이다.\n\n\n 다가가니 비석이 하나 있다.\n비석에는 문양이 새겨져 있다. 무엇을 의미하는 것일까?',
				markdown: true,
			},
			{
				type: 'image_link',
				url:
					'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image3@3x.jpg',
			},
			{
				type: 'text',
				text:
					'(1, 2, 4, 5, 6, 7, 8, 10)\n(3, 4, 7, 8, 10, 12)\n(1, 2, 3, 4, 5, 6, 7, 8)\n(1, 2, 4, 5, 6, 8, 10, 12)\n(1, 2, 9, 11)',
				markdown: true,
			},
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '정답',
						style: 'primary',
						action_type: 'call_modal',
						value: 'fantasy_answerModal2',
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: 'hint2',
					},
				],
			},
		],
	};
};