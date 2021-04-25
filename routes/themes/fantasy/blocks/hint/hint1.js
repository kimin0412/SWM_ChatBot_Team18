module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '문제1 힌트',
				style: 'blue',
			},
			{
				type: 'text',
				text: '기러기 - 기분 - 분해 - 해질녘 - .....',
				markdown: true,
			}
		],
	};
};