const libKakaoWork = require('../../../libs/kakaoWork');

module.exports = {
    modalBuilder: (data) => {
		const { message, value } = data;
		let [thema, context, order] = value.split('_');
		console.log(context);
		return require(`./blocks/${context}`)(order);

	},
    messageBuilder: async (data) => {
        const { message, actions, action_time, value, action_name } = data;
		let [thema, context, order] = value.split('_');
		const f = require(`./blocks/${context}`);
		await libKakaoWork.sendMessage({
			conversationId: message.conversation_id,
			... (actions) ? f(parseInt(order), actions.answer) : f(parseInt(order))
		});
    },
};