/**
 * blocks를 할당하지 않고 text만 할당하면 블록 형태가 아닌 단순 메세지 전송 가능
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        text: `'회사명에 모두 동물이 들어가는군...'`
    };
};