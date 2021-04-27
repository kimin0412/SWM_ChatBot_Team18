module.exports = (order) => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '틀렸습니다......',
				style: 'blue',
			},
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '정답',
						style: 'primary',
						action_type: 'call_modal',
						value: `fantasy_answer_${order}`,
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: `fantasy_hint_${order}`,
					},
				],
			},
		],
	};
};