/**
 * Ending Message
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        text: `대충 축하한다는 메세지`
    };
};