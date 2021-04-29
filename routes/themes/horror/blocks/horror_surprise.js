const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);
	
    const userName = user.userName;
	
	await libDatabase.clearTheme(react_user_id, 'horror')
	
    return {
        text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/nY8aWX.jpg"
    		},
			{
				type: "divider"
			},
			{
				type: 'button',
				text: '에필로그',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_epilogue_1',
				value: 'horror_epilogue_1',
			},
        ],
    };
};