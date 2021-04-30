module.exports = (data) => {
	const { message, actions, action_time, value, action_name } = data;
	let [thema, context, ord] = value.split('_');
	let order = parseInt(ord);
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
			},
		],
	};
};