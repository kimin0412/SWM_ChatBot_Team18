const data = require('./data')

exports.getBlock = (message, stageNum) => {
    
    const nextStageName = 'romance_result_' + String(stageNum)
    const choices = data.getAnswerChoices(stageNum)
    let options = []
    for(let i=1; i<choices.length; i++){
        const element = {
            "text": choices[i],
            "value": String(i),
        }
        options.push(element)
    }

    
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
                "placeholder": "XX이의 대답은?"
                }
            ],
        },
    };
};