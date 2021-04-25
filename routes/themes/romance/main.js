exports.getBlock = (message) => {
    
    const contents = [
        '지난달 막 전역한 XX',
        '요즘 알바에서 알게 된 YY이와 썸을 타고 있다',
        '이번에는 과연 모쏠에서 탈출할 수 있을까?',
    ];

    
    return {
        conversationId: message.conversation_id,
        text: 'XX이의 모쏠 탈출',
        blocks: [
            {
              "type": "header",
              "text": "XX이의 모쏠 탈출",
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
                'type': 'action',
                'elements': [
                    {
                        "type": 'button',
                        "text": '뒤로가기',
                        "style": 'default',
                        "action_type": 'submit_action',
                        "action_name": 'game_start',
                        "value": 'game_start',
                    },
                    {
                        "type": 'button',
                        "text": '시작',
                        "style": 'default',
                        "action_type": 'submit_action',
                        "action_name": 'romance_stage1_question',
                        "value": 'romance_stage1_question',
                    },
                ],
            },
            
        ],
    };
};