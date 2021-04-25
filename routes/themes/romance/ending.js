exports.getBlock = (message) => {

    const score = 50;
    let result = 'XX이는 모쏠에서 탈출했다';
    if(score < 80){
        result = 'XX이는 썸에서 탈출했다';
    }
    
    const contents = [
        result,
    ]
    
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
                "text": contents.join('\n'),
                "markdown": true,
            },
            {
                "type": 'button',
                "text": '메인으로',
                "style": 'default',
                "action_type": 'submit_action',
                "action_name": 'game_start',
                "value": 'game_start',    
            },
        ],
    };
};