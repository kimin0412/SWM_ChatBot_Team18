const libDatabase = require('../../../../libs/database/').service;

module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;

	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;

	const rankList = await libDatabase.getThemeRank('horror');
	let rank = await libDatabase.getThemeUserRank(react_user_id, 'horror');

	if (rank) {
		rank += '등';
		clearTime = user.themes.horror.dateCleared;
	} else {
		rank = 'XX';
		clearTime = 'TBD';
	}
	
	/** 랭킹 블록 */
    const rankListBlocks = [];
    let term, id, text;
    for (let i = 0; i < 5; i++) {
        term = (i + 1) + ' 등'

        if (i >= rankList.length) { // 랭킹에 사람이 적을 때 (5명 이하)
            text = 'TBD\nTBD'
        }
        else {
            id = rankList[i].userId.substr(rankList[i].userId.length - 4);
            text = `${rankList[i].userName} (${id})\n${rankList[i].themes.horror.dateCleared}`
        }

        rankListBlocks.push({
            type: "description",
            term: term,
            content: {
                type: "text",
                text: text,
                markdown: true
            },
            accent: true
        });
    }

    // 내 등수 표시
    term = rank;
    id = user.userId.substr(user.userId.length - 4);
    text = `${userName} (${id})\n${clearTime}`
	
    // rankListBlocks.push({
    //     type: "description",
    //     term: term,
    //     content: {
    //         type: "text",
    //         text: text,
    //         markdown: true
    //     },
    //     accent: true
    // });
	
    return {
        text: '방탈출 - 공포 테마',
        blocks: [
            { type: 'header', text: '1등은 커피! 🏆', style: 'yellow' },
            ...rankListBlocks,
			{
				type: 'divider',
			},
			{
				type: "description",
				term: rank,
				content: {
					type: "text",
					text: text,
					markdown: true
				},
				accent: true
			},
			{
				type: 'divider',
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

// 	return {
// 		text: '방탈출 - 추리 테마',
// 		blocks: [
// 			{ type: 'header', text: '공포 테마 클리어!', style: 'danger' },
// 			{
// 				type: 'description',
// 				term: '이름',
// 				content: { type: 'text', text: userName, markdown: false },
// 				accent: true,
// 			},
// 			{
// 				type: 'description',
// 				term: '테마',
// 				content: { type: 'text', text: '공포', markdown: false },
// 				accent: true,
// 			},
// 			{
// 				type: 'description',
// 				term: '클리어 시각',
// 				content: { type: 'text', text: clearTime, markdown: false },
// 				accent: true,
// 			},
// 			{
// 				type: 'description',
// 				term: '현재 순위',
// 				content: {
// 					type: 'text',
// 					text: rank,
// 					markdown: false,
// 				},
// 				accent: true,
// 			},
// 			{
// 				type: 'button',
// 				text: '테마 선택으로',
// 				style: 'primary',
// 				action_type: 'submit_action',
// 				action_name: 'game_start',
// 				value: 'game_start',
// 			},
// 		],
// 	};
// };