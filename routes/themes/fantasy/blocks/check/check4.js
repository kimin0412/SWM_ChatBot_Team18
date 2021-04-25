const libKaKaoWork = require("../../../../libs/kakaoWork");
const wrong = require('../wrong');
const correct4 = require('../correct/correct1');

module.exports = (data) => {
	const {message, actions, action, value, action_name, react_user_id} = data;
	
	if (actions.answer.toLowerCase() === "meteor"){
		return correct4();
	}
	else{
		return wrong();
	}
}