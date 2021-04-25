module.exports = (order) => {
	const questions = [
		require('./question/intro'),
		require('./question/question1'),
		require('./question/question2'),
		require('./question/question3'),
		require('./question/question4'),
		require('./question/question5'),
		require('./question/outtro')
	]
	return questions[order]();
};