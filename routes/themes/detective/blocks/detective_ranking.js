const libDatabase = require('../../../../libs/database/').service;

/** * Ending Message */
module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;

    const user = await libDatabase.findUser(react_user_id);

    const userName = user.userName;

    const rankList = await libDatabase.getThemeRank('detective');
    let rank = await libDatabase.getThemeUserRank(react_user_id, 'detective');
    const rankImgs = [
        'https://i.ibb.co/F8L41P3/first.png',
        'https://i.ibb.co/dDwnNJ6/second.png',
        'https://i.ibb.co/WWtdMBx/third.png',
        'https://i.ibb.co/CKTk2Vz/fourth.png',
        'https://i.ibb.co/Nmm6TgD/fifth.png',
		'https://i.ibb.co/xJhgL8R/not-yet.png'
    ];

    if (rank) {
        clearTime = user.themes.detective.dateCleared;
    } else {
        rank = 'XX';
        clearTime = 'TBD';
    }

    /** 랭킹 블록 */
    const rankListBlocks = [];
    let term, id, text, img;
    for (let i = 0; i < 5; i++) {
        if (i >= rankList.length) {
            // 랭킹에 사람이 적을 때 (5명 이하)
            text = '*NOT YET*\nnot yet';
			img = rankImgs[5];
        } else {
            id = rankList[i].userId.substr(rankList[i].userId.length - 4);
            text = `${rankList[i].userName} (${id})\n${rankList[i].themes.detective.dateCleared}`;
			img = rankImgs[i];
        }

        rankListBlocks.push(
            {
                type: 'section',
                content: {
                    type: 'text',
                    text: text,
                    markdown: true,
                },
                accessory: {
                    type: 'image_link',
                    url: img,
                },
            },
            { type: 'divider' }
        );
    }

    // 내 등수 표시
    id = user.userId.substr(user.userId.length - 4);
    text = `${userName} (${id})\n${clearTime}`;
    rankListBlocks.push({
        type: 'description',
        term: rank + ' 등',
        content: {
            type: 'text',
            text: text,
            markdown: true,
        },
        accent: true,
    });

    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            { type: 'header', text: '명예의 전당 🏆', style: 'yellow' },
            ...rankListBlocks,

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