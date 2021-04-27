module.exports = (order) => {
	return {
		text: 'Question',
		blocks: [
			{
				type: 'header',
				text: `${order}층: Shortcut?`,
				style: 'blue',
			},
			{
				type: 'text',
				text:
					"올라오니 샛길에 문이 보인다. 지름길인가?",
				markdown: true,
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/NLvRZcW/shortcut.png',
			},
			{
				type: 'text',
				text:
					"●○○○○●○○○○●●\n●●●○●●○●●●●○\n●●●●○○○●●●●○\n●●●○○○○●●●●○",
				markdown: true,
			},
			{
				type: 'text',
				text:
					"암호를 잘 살펴보자...",
				markdown: true,
			},
		],
	};
};