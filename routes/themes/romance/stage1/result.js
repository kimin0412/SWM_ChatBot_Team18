exports.getBlock = (message) => {
    return {
        conversationId: message.conversation_id,
        text: '결과',
        blocks: [
            {
              "type": "header",
              "text": "결과",
              "style": "red"
            },
            {
              "type": "image_link",
              "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image6@3x.jpg"
            },
            {
                "type": 'text',
                "text": '결과\n[link test](https://xkchyybcg-tsqsy.run.goorm.io/)',
                "markdown": true,
            },
        ],
    };
};