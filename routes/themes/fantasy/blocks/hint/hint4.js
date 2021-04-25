module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '문제4 힌트',
				style: 'blue',
			},
			{
				type: 'text',
				text: 'maestro는 7글자이다',
				markdown: true,
			}
		],
	};
};