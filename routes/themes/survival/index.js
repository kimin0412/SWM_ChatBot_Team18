const libKakaoWork = require('../../../libs/kakaoWork');

module.exports = {
	/**
	 * detective 테마에 해당하는 모달을 생성
	 * @param {*} data req.body, 사용자에 대한 정보가 담겨있는 객체
	 * @returns modal 정의 json
	 */
    modalBuilder: (data) => {
		const { value } = data;
		
		return require('./blocks/' + value)(data)

	},
	/**
	 * detective 테마에 해당하는 메세지를 생성,
	 * return 대신 내부적으로 메세지 전송 메소드를 호출함.
	 * @param {*} data req.body, 사용자에 대한 정보가 담겨있는 객체
	 */
    messageBuilder: async (data) => {
        const { message, value } = data;
		
		await libKakaoWork.sendMessage({
			conversationId: message.conversation_id,
			...require('./blocks/' + value)(data)
		});
    },
	
};