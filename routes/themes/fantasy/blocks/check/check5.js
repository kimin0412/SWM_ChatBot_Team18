const libKaKaoWork = require("../../../../libs/kakaoWork");
const wrong = require('../wrong');
const correct5 = require('../correct/correct1');

module.exports = (data) => {
	const {message, actions, action, value, action_name, react_user_id} = data;
	
	if (actions.answer.toLowerCase() === "airpods"){
		return correct5();
	}
	else{
		return wrong();
	}
}