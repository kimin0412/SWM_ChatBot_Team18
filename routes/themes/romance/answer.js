const data = require('./data')

exports.getBlock = (body) => {
    
    const message = body['message']
    const value = body['value']
    const stageNum = Number(value.charAt(value.length-1))
    
    const nextStageName = 'romance_result_' + String(stageNum)
    const choices = data.getAnswerChoices(stageNum)
    let options = []
    for(let i=1; i<choices.length; i++){
        const element = {
            "text": choices[i][0],
            "value": String(i),
        }
        options.push(element)
    }
    
    console.log('로맨스 스테이지' + String(stageNum) + ' 남자 대답')
    
    return {
        view: {
            title: '정답 입력',
            accept: '확인',
            decline: '취소',
            value: nextStageName,
            blocks: [
                {
                "type": "select",
                "name": "input_answer",
                "options": options,
                "required": true,
                "placeholder": "선택"
                }
            ],
        },
    };
};