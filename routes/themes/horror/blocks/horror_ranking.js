const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);
	
    const userName = user.userName;
	const clearTime = user.themes.horror.dateCleared;
    const rank = await libDatabase.getThemeUserRank(react_user_id, 'horror') + '등';
	
    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            { type: 'header', text: '공포테마 클리어!', style: 'danger' },
            {
                type: 'description',
                term: '이름',
                content: { type: 'text', text: userName, markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '테마',
                content: { type: 'text', text: '공포', markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '클리어 시각',
                content: { type: 'text', text: clearTime, markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '현재 순위',
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
        ],
    };
};