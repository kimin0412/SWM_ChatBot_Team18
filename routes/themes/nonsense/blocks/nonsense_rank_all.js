const libDatabase = require('../../../../libs/database/').service


module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;

	const rankList = await libDatabase.getThemeRank('nonsense');
	const rankListBlocks = [];
	const imgs = [
		'https://i.ibb.co/F8L41P3/first.png',
		'https://i.ibb.co/dDwnNJ6/second.png',
		'https://i.ibb.co/WWtdMBx/third.png',
		'https://i.ibb.co/CKTk2Vz/fourth.png',
		'https://i.ibb.co/Nmm6TgD/fifth.png',
		'https://i.ibb.co/xJhgL8R/not-yet.png',
	];
	let ranker, text, img, clearTime; // id, term
	for (let i = 0; i < 5; i++) {
		ranker = rankList[i];
		if (i < rankList.length) {
			img = imgs[i];
			let timeStr = String(ranker.themes.nonsense.dateCleared);
			let [day, month, date, year, time, timedelta, timezone] = timeStr.split(' ');
			clearTime = `${day} ${month} ${date} ${year} ${time}`;
			text = `*${i + 1}등 ${ranker.userName}*\n클리어 시간\n${clearTime}`; //+ clearTime;
		} else if (i == rankList.length) {
			img = imgs[imgs.length - 1];
			text = '*NOT YET*\nnot yet';
		} else {
			break;
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
	return {
		text: '방탈출 - Nonsense Thema',
		blocks: [
			{
				type: 'header',
				text: '명예의 전당 - Nonsense',
				style: 'yellow',
			},
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