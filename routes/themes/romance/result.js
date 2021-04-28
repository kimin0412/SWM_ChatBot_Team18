const data = require('./data')
const db = require('../../../libs/database/service/index')

exports.getBlock = async (body) => {
    
    const message = body['message']
    const value = body['value']
    const stageNum = Number(value.charAt(value.length-1))
    const actions = body['actions']
    const react_user_id = body['react_user_id']
    
    const answer = actions.input_answer
    const nextStageName = 'romance_question_' + String(stageNum+1)
    const choices = data.getAnswerChoices(stageNum)
    let result = data.getResult(stageNum, answer)

    console.log('로맨스 스테이지' + String(stageNum) + ' 여자 대답')

    // 순서대로 20점, 16점, 12점, 8점, 4점
    const dbUser = await db.updateThemeInfo(
        react_user_id, 
        'romance', {
            'score': (6-choices[answer][1]) * 4, 
            'romance_passed':stageNum}, 
        true)
    console.log(dbUser)
    
    
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