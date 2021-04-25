module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '3층: Knight',
				style: 'blue',
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/Wf3zMkK/q3-1.png',
			},
			{
				type: 'text',
				text:
					'얼떨결에 3층으로 도망쳐 왔다.\n 소마의 탑에 들어오니 기사들이 경계를 서고 있다.\n 기사들을 피해서 통과하자',
				markdown: true,
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/j4kqd7X/q3-2.jpg',
			},
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '정답',
						style: 'primary',
						action_type: 'call_modal',
						value: 'fantasy_answerModal3',
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: 'hint3',
					},
				],
			},
		],
	};
};