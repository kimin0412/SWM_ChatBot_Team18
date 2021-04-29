module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;
	let [thema, context, ord] = value.split('_');
	console.log(ord);
	switch(ord){
		case 'hof':
			return await require('./rank/hallOfFame')(data);
			break;
		case 'user':
			return await require('./rank/userRank')(data);
			break;
		default:
			break;
	}
}

// const rankerBlock = (order) => {
// 	order += 1;
// 	const userName = `${order} name`;
// 	const clearTime = 'clear time';
// 	return (
// 		{
// 			type: 'header',
// 			text: '명예의 전당',
// 			style: 'blue',
// 		},
// 		{
// 			type: 'section',
// 			content: {
// 				type: 'text',
// 				text: `*${userName}*\n${clearTime}`,
// 				markdown: true,
// 			},
// 			accessory: {
// 				type: 'image_link',
// 				url:
// 					'https://t1.kakaocdn.net/kakaowork/resources/block-kit/section/8twinkle@3x.jpg',
// 			},
// 		}
// 	);
// };

// module.exports = () => {
// 	const blocks = [
// 		{
// 			type: 'header',
// 			text: '명예의 전당',
// 			style: 'blue',
// 		},
// 	];
// 	for (let i = 0; i < 5; i++) {
// 		blocks.push(rankerBlock(i));
// 	}
// 	blocks.push({
// 		type: 'button',
// 		text: '테마선택',
// 		style: 'default',
// 		action_type: 'submit_action',
// 		action_name: 'game_start',
// 		value: 'game_start',
// 	});
// 	return {
// 		text: '랭킹',
// 		blocks: blocks,
// 	};
// };