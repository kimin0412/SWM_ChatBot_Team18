module.exports = (order) => {
	return {
		text: 'Question',
		blocks: [
			{
				type: 'header',
				text: `${order}층: Knight`,
				style: 'blue',
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/Wf3zMkK/q3-1.png',
			},
			{
				type: 'text',
				text:
					"길을 따라 올라오니 기사들이 경계를 서고 있다.\n 기사들을 피해서 통과하자",
				markdown: true,
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/j4kqd7X/q3-2.jpg',
			},
		],
	};
};