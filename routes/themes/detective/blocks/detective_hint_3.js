/**
 * blocks를 할당하지 않고 text만 할당하면 블록 형태가 아닌 단순 메세지 전송 가능
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        text: `'음... 왼쪽 아래부터 시작인 것 같아. 그리고 윗줄에 적힌 숫자들은 영향을 주기만 하는군...'`
    };
};