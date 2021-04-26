exports.getBlock = (message) => {
    return {
        conversationId: message.conversation_id,
        text: '연애 스테이지1 대화',
        blocks: [
            {
                type: 'header',
                text: '연애 스테이지1',
                style: 'red',
            },
            {
                type: 'image_link',
                url:
                    'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image6@3x.jpg',
            },
            {
                type: 'text',
                text: '연애 스테이지1 대화\n[link test](https://xkchyybcg-tsqsy.run.goorm.io/)',
                markdown: true,
            },
            {
                "type": 'action',
                "elements": [
                    {
                        "type": 'button',
                        "text": '답1',
                        "style": 'default',
                        "action_type": 'submit_action',
                        "action_name": 'romance_stage1_question',
                        "value": 'romance_stage1_question',
                    },
                    {
                        "type": 'button',
                        "text": '답2',
                        "style": 'primary',
                        "action_type": 'submit_action',
                        "action_name": 'romance_stage1_question',
                        "value": 'romance_stage1_question',
                    },
                    {
                        "type": 'button',
                        "text": '답3',
                        "style": 'danger',
                        "action_type": 'submit_action',
                        "action_name": 'romance_stage1_question',
                        "value": 'romance_stage1_question',
                    },
                ],
            },
        ],
    };
};