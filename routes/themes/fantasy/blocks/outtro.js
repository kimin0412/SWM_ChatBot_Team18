module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: 'Fantasy Thema - outtro',
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
						text: '랭킹 보기',
						style: 'default',
					},
					{
						type: 'button',
						text: '테마선택',
						style: 'default',
					},
				],
			},
		],
	};
};