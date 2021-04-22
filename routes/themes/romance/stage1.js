// const Config = require('config');
// const axios = require('axios');
// const kakaoInstance = axios.create({
//   baseURL: 'https://api.kakaowork.com',
//   headers: {
//     Authorization: `Bearer ${Config.keys.kakaoWork.bot}`,
//   },
// });

const libKakaoWork = require('/workspace/xkchyybcg/libs/kakaoWork');

exports.sendMessage = async (message) => {
    return libKakaoWork.sendMessage({
        conversationId: message.conversation_id,
        text: '연애 버튼 테스트',
        blocks: [
            {
                type: 'text',
                text: '연애 버튼 테스트',
                markdown: true,
            },
        ],
    });
};
// exports.openConversations = async ({ userId }) => {
//   const data = {
//     user_id: userId,
//   };
//   const res = await kakaoInstance.post('/v1/conversations.open', data);
//   return res.data.conversation;
// };

// exports.sendMessage = async ({ conversationId, text, blocks }) => {
//   const data = {
//     conversation_id: conversationId,
//     text,
//     ...blocks && { blocks },
//   };
//   const res = await kakaoInstance.post('/v1/messages.send', data);
//   return res.data.message;
// };