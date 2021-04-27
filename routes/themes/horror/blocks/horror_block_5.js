module.exports = (data) => {
	const { message, actions, action_time, value, action_name } = data;
	return {
		text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '카드를 태운다.',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'horror_end_2',
						value: 'horror_end_2',
					},
					{
						type: 'button',
						text: '기호를 해석해본다.',
						style: 'primary',
						action_type: 'call_modal',
						action_name: 'horror_quiz_6',
						value: 'horror_quiz_6',
					},
				],
			},
		],
	};
};