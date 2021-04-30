const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
    return {
        text: '2번 문제 힌트입니다.',
        blocks: [
            {
                type: 'text',
                text: '힌트 : 색과 숫자... 잘 조합해보면 될 것 같아',
                markdown: true,
            },
        ],
    };
};
