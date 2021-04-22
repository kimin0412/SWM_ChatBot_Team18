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
