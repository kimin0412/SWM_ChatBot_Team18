exports.getBlock = (message) => {
    return {
        conversationId: message.conversation_id,
        text: '연애 메인 페이지',
        blocks: [
            {
              "type": "header",
              "text": "연애 메인",
              "style": "red"
            },
            {
              "type": "image_link",
              "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image6@3x.jpg"
            },
            {
                "type": 'text',
                "text": '방탈출 연애 테마, 컨셉 설명',
                "markdown": true,
            },
            {
                "type": 'button',
                "text": '시작',
                "style": 'default',
                "action_type": 'submit_action',
                "action_name": 'romance_stage1_conversation',
                "value": 'romance_stage1_conversation',
            },
        ],
    };
};