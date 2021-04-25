exports.getBlock = (message) => {
    
    const contents = [
        'YY이와 카톡을 하다가 영화 얘기가 나왔다.',
        '이번에 귀멸의 칼날 영화 나온거 알아? 궁금하다',
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
                "action_name": 'romance_stage2_answer',
                "value": 'romance_stage2_answer',
            },
        ],
    };
};