module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '5층: rainbow',
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'메테오를 날리니 천장이 무너지고 하늘이 보인다....\n 하늘에는 무지개가 떠 있다...\n\n보물은 무엇일까?',
				markdown: true,
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/84X8dZq/q5.jpg', 
			},
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '정답',
						style: 'primary',
						action_type: 'call_modal',
						value: 'fantasy_answer_5',
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: 'fantasy_hint_5',
					},
				],
			},
		],
	};
};