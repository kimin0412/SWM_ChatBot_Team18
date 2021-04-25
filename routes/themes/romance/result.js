const data = require('./data')

exports.getBlock = (message, stageNum, actions) => {
    
    const answer = actions.input_answer
    const nextStageName = 'romance_question_' + String(stageNum+1)
    let result = data.getResult(stageNum, answer)

    return {
        conversationId: message.conversation_id,
        text: 'YY',
        blocks: [
            {
              "type": "header",
              "text": "YY",
              "style": "red"
            },
            {
                "type": 'text',
                "text": result,
                "markdown": true,
            },
            {
                "type": 'button',
                "text": '다음',
                "style": 'default',
                "action_type": 'submit_action',
                "action_name": nextStageName,
                "value": nextStageName,
            },
        ],
    };
};