module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '2층: TombStone',
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'주소를 찾아가니 으스스한 분위기의 건물이 있었다.\n탑 근처로 다가가니 비석이 하나 있다.\n비석에는 문양이 새겨져 있다. 무엇을 의미하는 것일까?',
				markdown: true,
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/NCqC3Pk/q2.png',
			},
			{
				type: 'text',
				text:
					'*(1, 2, 4, 5, 6, 7, 8, 10)\n(3, 4, 7, 8, 10, 12)\n(1, 2, 3, 4, 5, 6, 7, 8)\n(1, 2, 4, 5, 6, 8, 10, 12)\n(1, 2, 9, 11)*',
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
						value: 'fantasy_answer_2',
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: 'fantasy_hint_2',
					},
				],
			},
		],
	};
};