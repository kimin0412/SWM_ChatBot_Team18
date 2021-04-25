const wrong = require('../wrong');
const correct3 = require('../correct/correct3');

module.exports = (data) => {
	const {message, actions, action, value, action_name, react_user_id} = data;
	
	if (actions.answer.toLowerCase() === "soma"){
		return correct3();
	}
	else{
		return wrong();
	}
}