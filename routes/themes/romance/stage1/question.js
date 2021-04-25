exports.getBlock = (message) => {
    return {
        conversationId: message.conversation_id,
        text: '문제',
        blocks: [
            {
              "type": "header",
              "text": "문제",
              "style": "red"
            },
            {
              "type": "image_link",
              "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image6@3x.jpg"
            },
            {
                "type": 'text',
                "text": '문제\n[link test](https://xkchyybcg-tsqsy.run.goorm.io/)',
                "markdown": true,
            },
            {
                "type": "button",
                "text": "입력",
                "style": "default",
                "action_type": 'call_modal',
                "action_name": 'romance_stage1_answer',
                "value": 'romance_stage1_answer',

            },
        ],
    };
};