const fs = require('fs')
const data = require('./data')
// const score = require('./score')

exports.getBlock = (body) => {
    
    const message = body['message']
    const value = body['value']
    const stageNum = Number(value.charAt(value.length-1))
    const actions = body['actions']
    const react_user_id = body['react_user_id']
    
    const answer = actions.input_answer
    const nextStageName = 'romance_question_' + String(stageNum+1)
    const choices = data.getAnswerChoices(stageNum)
    let result = data.getResult(stageNum, answer)
    result += '\n(-' + String(choices[answer][1]-1) + '점)'

    
    const dataBuffer = fs.readFileSync(__dirname+'/score.json')
    const dataJson = dataBuffer.toString()
    const score = JSON.parse(dataJson)

    if (!(react_user_id in score)){
        score[react_user_id] = 100
    }
    score[react_user_id] -= choices[answer][1]-1
    
    const scoreJson = JSON.stringify(score)
    fs.writeFileSync(__dirname+'/score.json', scoreJson)
    
    
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