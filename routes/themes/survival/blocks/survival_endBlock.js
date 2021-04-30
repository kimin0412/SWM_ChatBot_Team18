// thanks detective!!!
const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	await libDatabase.clearTheme(react_user_id, 'survival');
	
	const user = await libDatabase.findUser(react_user_id);
    const userName = user.userName;
	
	const clearTime = user.themes.survival.dateCleared;
	const rank = await libDatabase.getThemeUserRank(react_user_id, 'survival') + '등';
	
    return {
        text: '방탈출 - 생존 테마',
        blocks: [
            { type: 'header', text: '게임 클리어 !! 🎉', style: 'yellow' },
            {
                type: 'description',
                term: '이름',
                content: { type: 'text', text: userName, markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '테마',
                content: { type: 'text', text: '생존', markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '시각',
                content: { type: 'text', text: clearTime, markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '순위',
                content: {
                    type: 'text',
                    text: rank,
                    markdown: false,
                },
                accent: true,
            },
            {
                type: 'button',
                text: '테마 선택으로',
                style: 'primary',
                action_type: 'submit_action',
                action_name: 'game_start',
                value: 'game_start',
            },
			{
                type: 'button',
                text: '명예의 전당',
                style: 'default',
                action_type: 'submit_action',
                action_name: 'survival_hallOfFameBlock',
                value: 'survival_hallOfFameBlock',
            }
        ],
    };
};
