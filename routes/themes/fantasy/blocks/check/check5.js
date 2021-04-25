const wrong = require('../wrong');
const correct5 = require('../correct/correct5');

module.exports = (data) => {
	const {message, actions, action, value, action_name, react_user_id} = data;
	
	if (actions.answer.toLowerCase() === "airpods"){
		return correct5();
	}
	else{
		return wrong();
	}
}