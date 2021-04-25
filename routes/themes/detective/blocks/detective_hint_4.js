/**
 * blocks를 할당하지 않고 text만 할당하면 블록 형태가 아닌 단순 메세지 전송 가능
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        text: `'스페이스와 쉼표에는 피가 묻지 않았어.'`
    };
};