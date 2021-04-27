const data = require('./data')

exports.getBlock = (body) => {
    
    const message = body['message']
    const value = body['value']
    const stageNum = Number(value.charAt(value.length-1))
    
    const nextStageName = 'romance_answer_' + String(stageNum)
    const contents = data.getQuestionContents(stageNum)
    
    const img_url = data.getImageUrl(stageNum)
    
    return {
        conversationId: message.conversation_id,
        text: '문제',
        blocks: [
            {
              "type": "header",
              "text": '문제',
              "style": "red"
            },
            {
              "type": "image_link",
              "url": img_url
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