module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '틀렸습니다......',
				style: 'blue',
			}
			// ,
			// {
			// 	type: 'text',
			// 	text: '(제출한 정답 내용??) is wrong!!',
			// 	markdown: true,
			// },
			// {
			// 	type: 'action',
			// 	elements: [
			// 		{
			// 			type: 'button',
			// 			text: '제출',
			// 			style: 'primary',
			// 		},
			// 		{
			// 			type: 'button',
			// 			text: '힌트',
			// 			style: 'default',
			// 		},
			// 		{
			// 			type: 'button',
			// 			text: '스킵',
			// 			style: 'danger',
			// 		},
			// 	],
			// },
		],
	};
};