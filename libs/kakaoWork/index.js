const Config = require('config');
const axios = require('axios');

const kakaoInstance = axios.create({
    baseURL: 'https://api.kakaowork.com',
    headers: {
        Authorization: `Bearer ${Config.keys.kakaoWork.bot}`,
    },
});

exports.getUserList = async () => {
    let res = await kakaoInstance.get('/v1/users.list?limit=100');
    let users = res.data.users;
    while (res.data.cursor) {
        res = await kakaoInstance.get('/v1/users.list?cursor=' + res.data.cursor);
        users = users.concat(res.data.users);
    }
    return users;
};

exports.openConversations = async ({ userId }) => {
    const data = {
        user_id: userId,
    };
    const res = await kakaoInstance.post('/v1/conversations.open', data);
    return res.data.conversation;
};

exports.sendMessage = async ({ conversationId, text, blocks }) => {
    const data = {
        conversation_id: conversationId,
        text,
        ...(blocks && { blocks }),
    };
    const res = await kakaoInstance.post('/v1/messages.send', data);
    return res.data.message;
};