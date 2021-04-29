const libDatabase = require('../../../../libs/database/').service

/** * Ending Message */
module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);
	
    const userName = user.userName;
    
    const rankList = await libDatabase.getThemeRank('detective')
    let rank = await libDatabase.getThemeUserRank(react_user_id, 'detective');
	
	if (rank) {
		clearTime = user.themes.detective.dateCleared;
	} else {
		rank = 'XX'
		clearTime = 'TBD'
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
            text = `${rankList[i].userName} (${id})\n${rankList[i].themes.detective.dateCleared}`
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
    term = rank + ' 등'
    id = user.userId.substr(user.userId.length - 4);
    text = `${userName} (${id})\n${clearTime}`
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
	
    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            { type: 'header', text: '명예의 전당 🏆', style: 'yellow' },
            ...rankListBlocks
        ],
    };
};