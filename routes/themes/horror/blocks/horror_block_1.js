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
						text: '일단 튀쳐나간다.',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'horror_fail_1',
						value: 'horror_fail_1',
					},
					{
						type: 'button',
						text: '돌아본다.',
						style: 'primary',
						action_type: 'submit_action',
						action_name: 'horror_event_1',
						value: 'horror_event_1',
					},
				],
			},
		],
	}
};