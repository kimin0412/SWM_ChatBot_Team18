const data = require('./data')

exports.getBlock = (message, stageNum) => {
    
    const nextStageName = 'romance_answer_' + String(stageNum)
    const contents = data.getQuestionContents(stageNum)
    
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
                "action_name": nextStageName,
                "value": nextStageName,
            },
        ],
    };
};