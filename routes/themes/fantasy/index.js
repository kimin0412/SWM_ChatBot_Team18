const libKakaoWork = require('../../../libs/kakaoWork');

module.exports = {
    modalBuilder: (data) => {
		const { message, value } = data;
		let [thema, context, order] = value.split('_');
		return require(`./blocks/${context}`)(data);

	},
    messageBuilder: async (data) => {
        const { message, actions, action_time, value, action_name } = data;
		let [thema, context, order] = value.split('_');
		await libKakaoWork.sendMessage({
			conversationId: message.conversation_id,
			... await require(`./blocks/${context}`)(data)
		});
    },
};