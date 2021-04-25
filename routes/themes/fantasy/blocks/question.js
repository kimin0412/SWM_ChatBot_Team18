module.exports = (order) => {
	const questions = [
		'./question/intro',
		'./question/question1',
		'./question/question2',
		'./question/question3',
		'./question/question4',
		'./question/question5',
		'./question/outtro'
	]
	return require(questions[order])();
};