const libDatabase = require('../../../../../libs/database/').service;

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;

	const user = await libDatabase.findUser(react_user_id);
	const rank = await libDatabase.getThemeUserRank(react_user_id, 'fantasy') + '등';
	
    const userName = user.userName;
	let timeStr = String(user.themes.fantasy.dateCleared);
	let [day, month, date, year, time, timedelta, timezone] = timeStr.split(' ');
	let clearTime = `${day} ${month} ${date} ${year} ${time}`;
    

    return {
        text: '방탈출 - Fantasy Thema',
        blocks: [
            { 
				type: 'header', 
				text: '내 순위', 
				style: 'yellow' 
			},
            {
                type: 'description',
                term: '이름',
                content: { 
					type: 'text', 
					text: userName, 
					markdown: false 
				},
                accent: true,
            },
            {
                type: 'description',
                term: '테마',
                content: { 
					type: 'text', 
					text: 'Fantasy', 
					markdown: false 
				},
                accent: true,
            },
            {
                type: 'description',
                term: '클리어 시각',
                content: { 
					type: 'text', 
					text: clearTime, 
					markdown: false 
				},
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
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '명예의 전당',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'fantasy_ranking',
						value: 'fantasy_ranking_hof',
					},
					{
						type: 'button',
						text: '테마 선택',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'game_start',
						value: 'game_start',
					},
				],
			},
        ],
    };
}; 