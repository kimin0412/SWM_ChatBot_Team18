const libDatabase = require('../../../../../libs/database/').service;

module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;

	const rankList = await libDatabase.getThemeRank('fantasy');
	const rankListBlocks = [];
	const imgs = [
		'https://i.ibb.co/F8L41P3/first.png',
		'https://i.ibb.co/dDwnNJ6/second.png',
		'https://i.ibb.co/WWtdMBx/third.png',
		'https://i.ibb.co/CKTk2Vz/fourth.png',
		'https://i.ibb.co/Nmm6TgD/fifth.png',
		'https://i.ibb.co/xJhgL8R/not-yet.png'
	];
	let ranker, text, img; // id, term
	for (let i = 0;(i < 5); i++) {
		ranker = rankList[i];
		
		if (i < rankList.length){
			img = imgs[i];
			text = `*${i + 1} 등*\n${ranker.userName}`; //+ clearTime;
		}
		else if (i == rankList.length){
			img = imgs[imgs.length - 1];
			text = '*NOT YET*\nnot yet';
		}
		else {
			break;
		}

		rankListBlocks.push({
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
		});
	}
	return {
		text: '방탈출 - Fantasy Thema',
		blocks: [
			{
				type: 'header',
				text: 'Hall of Fame',
				style: 'yellow',
			},
			...rankListBlocks,
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '내 랭킹',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'fantasy_ranking',
						value: 'fantasy_ranking_user',
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