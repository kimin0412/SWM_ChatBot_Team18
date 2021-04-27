module.exports = (order, answer) => {
	return answer === require('./questionData')(order, 'solution');
}