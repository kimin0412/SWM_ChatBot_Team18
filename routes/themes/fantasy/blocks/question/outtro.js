module.exports = () => {
	return {
		text: 'Fantasy outtro',
		blocks: [
			{
				type: 'header',
				text: 'Fantasy Thema-outtro',
				style: 'blue',
			},
			{
				type: 'text',
				text: '축하합니다. 클리어하셨습니다.',
				markdown: true,
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
						text: '내 랭킹',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'fantasy_ranking',
						value: 'fantasy_ranking_user',
					},
					{
						type: 'button',
						text: '테마선택',
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