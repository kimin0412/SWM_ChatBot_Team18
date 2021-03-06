const main = require('./main')
const ending = require('./ending')
const answer = require('./answer')
const question = require('./question')
const result = require('./result')
const data = require('./data')
const userRank = require('./userRank')
const hallOfFame = require('./hallOfFame')


exports.getBlock = (body) => {
    
    const value = body['value']
    const stageNum = Number(value.charAt(value.length-1))
    const stageLength = data.getStageLength()
    
    if (value.includes('main')){
        return main.getBlock(body)
    }
    else if (value.includes('userRank')){
        return userRank.getBlock(body)
    }
    else if (value.includes('hallOfFame')){
        return hallOfFame.getBlock(body)
    }
    else if (stageNum === stageLength+1){
        return ending.getBlock(body)
    }
    
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