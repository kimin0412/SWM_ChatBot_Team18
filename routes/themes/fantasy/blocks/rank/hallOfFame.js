const libDatabase = require('../../../../../libs/database/').service;

module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;

	const rankList = await libDatabase.getThemeRank('fantasy');
	const rankListBlocks = [];
	const imgs = [
		'https://png.pngtree.com/png-clipart/20210311/original/pngtree-golden-metal-first-place-honor-png-image_5981033.jpg',
		'https://png.pngtree.com/png-clipart/20210310/original/pngtree-number-2-golden-font-png-image_5963413.jpg',
		'https://png.pngtree.com/png-clipart/20210411/original/pngtree-number-3-png-image_6212590.jpg',
		'https://png.pngtree.com/png-clipart/20210314/original/pngtree-gold-number-4-four-png-image_6083886.jpg',
		'https://png.pngtree.com/png-clipart/20210311/original/pngtree-3d-number-5-wood-png-image_6002999.jpg',
	];
	let ranker, text, img; // id, term
	console.log(rankList);
	for (let i = 0; (i < 5) & (i < rankList.length); i++) {
		ranker = rankList[i];

		text = `*${i + 1} 등*\n${ranker.userName}`;
		img = imgs[i];
		// id = ranker.userId.substr(ranker.userId.length - 4);

		rankListBlocks.push({
			type: 'section',
			content: {
				type: 'text',
				text: `*${i + 1} 등*\n${ranker.userName}`,
				markdown: true,
			},
			accessory: {
				type: 'image_link',
				url: img,
			},
		});
	}
	console.log(rankListBlocks);
	let x = {
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
	console.log(x);
	return x;
};