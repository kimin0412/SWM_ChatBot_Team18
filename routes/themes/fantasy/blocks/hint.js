module.exports = (order) => {
	const hint = require('./questionData')(order, 'hint');
	return {
		text: 'hint message',
		blocks: [
			{
				type: 'header',
				text: `힌트${order}`,
				style: 'blue',
			},
			{
				type: 'text',
				text: hint,
				markdown: true,
			}
		],
	};
};