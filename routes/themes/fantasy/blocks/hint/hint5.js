module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '문제5 힌트',
				style: 'blue',
			},
			{
				type: 'text',
				text: '무지개는 빨주노초파남보이다',
				markdown: true,
			}
		],
	};
};