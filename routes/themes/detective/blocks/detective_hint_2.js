/**
 * blocks를 할당하지 않고 text만 할당하면 블록 형태가 아닌 단순 메세지 전송 가능
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        text: `'배는 상해에서 출발해서 수에즈 운하를 거쳐가려 했겠지, 목적지는 남유럽일 가능성이 커.'`
    };
};