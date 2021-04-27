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
						text: '회의실을 튀쳐나온다.',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'horror_fail_2',
						value: 'horror_fail_2',
					},
					{
						type: 'button',
						text: '살며시 돌아본다.',
						style: 'primary',
						action_type: 'submit_action',
						action_name: 'horror_event_2',
						value: 'horror_event_2',
					},
				],
			},
		],
	}
};