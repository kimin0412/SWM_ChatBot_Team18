module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '문제3 힌트',
				style: 'blue',
			},
			{
				type: 'text',
				text: '왕, 여왕, 주교, 탑, ...',
				markdown: true,
			}
		],
	};
};