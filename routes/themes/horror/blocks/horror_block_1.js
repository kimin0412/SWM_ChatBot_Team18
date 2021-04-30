const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
	return {
		text: '방탈출 - 공포 테마',
		blocks: [
			{
			type: 'action',
				elements: [
					{
						type: 'button',
						text: '튀쳐나간다.',
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