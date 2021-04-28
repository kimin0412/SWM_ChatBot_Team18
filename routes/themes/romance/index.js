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
    const stageLength = data.getStageLength()
    
    if (value.includes('main')){
        return main.getBlock(body)
    }
    else if (value.includes('ending') || stageNum === stageLength+1){
        return ending.getBlock(body)
    }
    
    const actions = body['actions']
    
    if (value.includes('answer')){
        return answer.getBlock(body)
    }
    else if (value.includes('result')){
        return result.getBlock(body)
    }
    else if (value.includes('question')){
        return question.getBlock(body)
    }
}