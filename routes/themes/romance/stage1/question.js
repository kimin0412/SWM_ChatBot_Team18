exports.getBlock = (message) => {
    
    const contents = [
        '어느날 함께 알바를 하던 중 YY이가 말한다.',
        '와 오빠 아까 그 손님 진짜 예쁘지 않아?',
    ]
    
    return {
        conversationId: message.conversation_id,
        text: 'YY',
        blocks: [
            {
              "type": "header",
              "text": 'YY',
              "style": "red"
            },
            {
              "type": "image_link",
              "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image6@3x.jpg"
            },
            {
                "type": 'text',
                "text": contents.join('\n'),
                "markdown": true,
            },
            {
                "type": 'button',
                "text": '정답 입력',
                "style": 'default',
                "action_type": 'call_modal',
                "action_name": 'romance_stage1_answer',
                "value": 'romance_stage1_answer',
            },
        ],
    };
};