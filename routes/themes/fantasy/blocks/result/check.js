module.exports = (order, answer) => {
	console.log(order, answer);
	return answer === require('../questionData')(order, 'solution');
}