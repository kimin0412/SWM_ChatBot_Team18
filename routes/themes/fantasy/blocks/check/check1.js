const wrong = require('../wrong');
const correct1 = require('../correct/correct1');

module.exports = (data) => {
	console.log(data);
	const {message, actions, action, value, action_name, react_user_id} = data;
	
	if (actions.answer.toLowerCase() === "anam"){
		return correct1();
	}
	else{
		return wrong();
	}
}