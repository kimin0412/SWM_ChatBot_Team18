const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
    return {
        text: '1번 문제 힌트입니다.',
        blocks: [
            {
                type: 'text',
                text: '힌트 : 연수생이라면 지금도 사용하고 있을텐데...',
                markdown: true,
            },
        ],
    };
};
