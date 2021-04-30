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
				text: "컴컴했던 복도에 빛이 퍼지고 당신은 오랜만에 마주한 빛에 안심하며 엘레베이터에 올라탑니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "1층을 누르고 닫힘버튼을 빠르게 누른 당신은 닫히는 문을 바라보며 벽에 기대어 크게 한숨을 내쉽니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: `"우우웅"`,
				markdown: true,
			},
			{
				type: 'text',
				text: "1층을 향해 내려가던 엘레베이터는 2층을 지나",
				markdown: true,
			},
			{
				type: 'text',
				text: "1층이 되었고",
				markdown: true,
			},
			{
				type: 'text',
				text: "엘레베이터의 숫자가 1에서 B1로 바뀌기 시작합니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: `'어...?'`,
				markdown: true,
			},
			{
				type: 'text',
				text: "엘레베이터의 숫자가 B7로 바뀌고 문이 열립니다.",
				markdown: true,
			},
			{
				type: 'button',
				text: '닫힘버튼을 누른다',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_quiz_5',
				value: 'horror_quiz_5'
			},
		],
	};
};