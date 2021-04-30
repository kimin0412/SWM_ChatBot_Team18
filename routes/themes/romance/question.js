const data = require('./data')

exports.getBlock = (body) => {
    
    const message = body['message']
    const value = body['value']
    const stageNum = Number(value.charAt(value.length-1))
    
    const nextStageName = 'romance_answer_' + String(stageNum)
    const contents = data.getQuestionContents(stageNum)
    
    const img_url = data.getImageUrl(stageNum)
    
    console.log('로맨스 스테이지' + String(stageNum) + ' 여자 질문')
    
    return {
        conversationId: message.conversation_id,
        text: '문제',
        blocks: [
            {
              "type": "header",
              "text": '문제'+String(stageNum),
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
                "text": '너의 멘트는?',
                "style": 'default',
                "action_type": 'call_modal',
                "action_name": nextStageName,
                "value": nextStageName,
            },
        ],
    };
};