const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
	return {
		text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: 'text',
				text: '인기척에 놀라 돌아보니 데스크 앞쪽에 *종이*가 한 장 떨어져있습니다.',
				markdown: true,
			},
			{
				type: 'text',
				text: `'아 뭐야... 종이네... ${userName}, 이 쫄보...!'`,
				markdown: true,
			},
			{
				type: 'divider',
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/IIH6Tu.jpg"
    		},
			{
				type: 'divider',
			},
			{
				type: 'text',
				text: `'회의실 비밀번호...? 비밀번호가 뭐 이렇게 많아?'`,
				markdown: true,
			},
			{
				type: 'text',
				text: `'일단 회의실로 가자'`,
				markdown: true,
			},
			
			{
				type: 'button',
				text: '회의실로 이동',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_quiz_2',
				value: 'horror_quiz_2'
			},
		],
	};
};