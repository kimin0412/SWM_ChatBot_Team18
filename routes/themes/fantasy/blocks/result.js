const check = require('./result/check');
const correct = require('./result/correct');
const wrong = require('./result/wrong');

module.exports = (order, answer) => {
	return check(order, answer) ? correct(order) : wrong(order);
}