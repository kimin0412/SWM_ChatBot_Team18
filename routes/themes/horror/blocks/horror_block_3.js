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
						text: '노트북을 덮는다.',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'horror_fail_3',
						value: 'horror_fail_3',
					},
					{
						type: 'button',
						text: '문서를 연다.',
						style: 'primary',
						action_type: 'submit_action',
						action_name: 'horror_quiz_4',
						value: 'horror_quiz_4',
					},
				],
			},
		],
	}
};