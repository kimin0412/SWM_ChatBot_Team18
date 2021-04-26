module.exports = (order) => {
	answers = [
		require('./answer/answer1'),
		require('./answer/answer2'),
		require('./answer/answer3'),
		require('./answer/answer4'),
		require('./answer/answer5'),
	];
	console.log(order);
	return answers[order - 1]();
};