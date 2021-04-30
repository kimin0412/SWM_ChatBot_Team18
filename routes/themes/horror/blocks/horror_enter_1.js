const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
    return {
        text: '방탈출 - 공포 테마',
		blocks: [
            {
                type: 'header',
                text: '공포테마 안내',
                style: 'red',
            },
			{
                type: 'text',
                text: "❗️주의❗️",
                markdown: true,
            },
			{
                type: 'text',
                text: "본 테마는 사용자에 따라 *깜짝 놀랄 수 있는* 이미지가 포함되어 있습니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "이용에 주의하시기 바랍니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "⚠️(해당 테마의 모든 내용은 픽션입니다. 실제 지역/단체와 아무런 연관이 없음을 알려드립니다.)",
                markdown: true,
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '시작 👣',
                        style: 'danger',
                        action_type: 'submit_action',
                        action_name: 'horror_quiz_1',
                        value: 'horror_quiz_1',
                    },
                    {
                        type: 'button',
                        text: '테마 선택 🎲',
                        style: 'primary',
						action_type: 'submit_action',
						action_name: 'game_start',
						value: 'game_start', 
                    },
                ],
            },
			{
				type: 'button',
				text: '랭킹 확인 🌟',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_ranking',
				value: 'horror_ranking',
			},
        ],
    };
};