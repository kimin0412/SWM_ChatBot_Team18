const rankerBlock = (order) => {
	order += 1;
	const userName = `${order} name`;
	const clearTime = 'clear time';
	return (
		{
			type: 'header',
			text: '명예의 전당',
			style: 'blue',
		},
		{
			type: 'section',
			content: {
				type: 'text',
				text: `*${userName}*\n${clearTime}`,
				markdown: true,
			},
			accessory: {
				type: 'image_link',
				url:
					'https://t1.kakaocdn.net/kakaowork/resources/block-kit/section/8twinkle@3x.jpg',
			},
		}
	);
};

module.exports = () => {
	const blocks = [
		{
			type: 'header',
			text: '명예의 전당',
			style: 'blue',
		},
	];
	for (let i = 0; i < 5; i++) {
		blocks.push(rankerBlock(i));
	}
	blocks.push({
		type: 'button',
		text: '테마선택',
		style: 'default',
		action_type: 'submit_action',
		action_name: 'game_start',
		value: 'game_start',
	});
	return {
		text: '랭킹',
		blocks: blocks,
	};
};