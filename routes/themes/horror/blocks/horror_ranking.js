const libDatabase = require('../../../../libs/database/').service;

module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;

	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;

	const rankList = await libDatabase.getThemeRank('horror');
	let rank = await libDatabase.getThemeUserRank(react_user_id, 'horror');
	// console.log(rank);
	const rankImgs = [
        'https://i.ibb.co/F8L41P3/first.png',
        'https://i.ibb.co/dDwnNJ6/second.png',
        'https://i.ibb.co/WWtdMBx/third.png',
        'https://i.ibb.co/CKTk2Vz/fourth.png',
        'https://i.ibb.co/Nmm6TgD/fifth.png',
		'https://i.ibb.co/xJhgL8R/not-yet.png'
    ];
	
	let clearTime;
	if (rank) { 
		let timeStr = String(user.themes.horror.dateCleared);
		let [day, month, date, year, time, timedelta, timezone] = timeStr.split(' ');
		clearTime = `${day} ${month} ${date} ${year} ${time}`;
	} else {
		rank = 'XX';
		clearTime = 'Not Yet';
	}
	
	/** 랭킹 블록 */
    const rankListBlocks = [];
    let term, id, text, img;
    for (let i = 0; i < 5; i++) {
		ranker = rankList[i];
        term = (i + 1) + ' 등'
        if (i >= rankList.length) { // 랭킹에 사람이 적을 때 (5명 이하)
			text = '*NOT YET*\nnot yet';
			img = rankImgs[5];
        }
        else {
			let timeStr = String(rankList[i].themes.horror.dateCleared);
			let [day, month, date, year, time, timedelta, timezone] = timeStr.split(' ');
			let clearTime = `${day} ${month} ${date} ${year} ${time}`;
			
            id = rankList[i].userId.substr(rankList[i].userId.length - 4);
            text = `*${i + 1}등 ${rankList[i].userName}* (${id})\n${clearTime}`;
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
    term = rank;
    id = user.userId.substr(user.userId.length - 4);
    text = `*${rank}등 ${userName}* (${id})\n${clearTime}`;
	
	if (rank != 'XX') {
		img = rankImgs[rank-1];
	} else if(rank > 5) {
		img = '';
	} else {
		img = rankImgs[5];
	}
	// img = rankImgs[rank-1];
    return {
        text: '방탈출 - 공포 테마',
        blocks: [
            { type: 'header', text: '1등은 커피! 🏆', style: 'yellow' },
            ...rankListBlocks,
			{
                type: 'text',
                text: "*내 기록*",
                markdown: true,
            },
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