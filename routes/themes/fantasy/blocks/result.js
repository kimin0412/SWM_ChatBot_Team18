const check = require('./result/check');
const correct = require('./result/correct');
const wrong = require('./result/wrong');
const libDatabase = require('../../../../libs/database/').service;
const LAST = 8;

module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;
	let [thema, context, ord] = value.split('_');
	let order = parseInt(ord);
	let answer = actions.answer;
	if (check(order, answer)) {
		if (order === LAST) await libDatabase.clearTheme(react_user_id, 'fantasy');
		return correct(order);
	} else {
		return wrong(order);
	}
};