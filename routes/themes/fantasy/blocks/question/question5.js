module.exports = (order) => {
	return {
		text: 'Question5',
		blocks: [
			{
				type: 'header',
				text: `${order}층: Shortcut?`,
				style: 'blue',
			},
			{
				type: 'text',
				text: '올라오니 샛길로 가는 문이 보인다. 지름길인가?',
				markdown: true,
			},
			{
				type: 'image_link',
				url: 'https://i.ibb.co/Z6BFrJS/shortcut.png',
			},
			{
				type: 'text',
				text: '●○○○○●○○○○●●\n●●●○●●○●●●●○\n●●●●○○○●●●●○\n●●●○○○○●●●●○',
				markdown: true,
			},
			{
				type: 'text',
				text: '암호를 잘 살펴보자...',
				markdown: true,
			},
		],
	};
};