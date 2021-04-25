const main = require('./main')
const ending = require('./ending')
const answer = require('./answer')
const question = require('./question')
const result = require('./result')
const data = require('./data')

exports.getBlock = (body) => {
    
    const value = body['value']
    const message = body['message']
    const stageNum = Number(value.charAt(value.length-1))
    const lastStageNum = data.getStageLength()
    
    if (value.includes('main')){
        return main.getBlock(message)
    }
    else if (value.includes('ending') || stageNum === lastStageNum+1){
        return ending.getBlock(message)
    }
    
    const actions = body['actions']
    
    if (value.includes('answer')){
        return answer.getBlock(message, stageNum)
    }
    else if (value.includes('result')){
        return result.getBlock(message, stageNum, actions)
    }
    else if (value.includes('question')){
        return question.getBlock(message, stageNum)
    }

}