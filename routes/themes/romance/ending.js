const fs = require('fs')


exports.getBlock = (body) => {

    const message = body['message']
    const react_user_id = body['react_user_id']
    
    console.log('로맨스 엔딩 페이지')

    // const dataBuffer = fs.readFileSync(__dirname+'/score.json')
    // const dataJson = dataBuffer.toString()
    // const score = JSON.parse(dataJson)

    // console.log('최종 점수는 ')
    // console.log(score[react_user_id])
    
    let result = '현우는 모쏠에서 탈출했다';
    let image_url = 'https://images.velog.io/images/leehj8896/post/8fdbb846-2e1d-4f8b-8ab4-c7e47bd56da4/image.png'
    if(score[react_user_id] < 90){
        result = '현우는 썸에서 탈출했다';
        image_url = 'https://images.velog.io/images/leehj8896/post/c607b7ca-1aef-4901-80a0-096f4b15fcfd/image.png'
    }
    
    const contents = [
        result,
    ]
    
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
              "type": "image_link",
              "url": image_url
            },
            {
                "type": 'text',
                "text": contents.join('\n'),
                "markdown": true,
            },
            {
                "type": 'button',
                "text": '메인으로',
                "style": 'default',
                "action_type": 'submit_action',
                "action_name": 'game_start',
                "value": 'game_start',    
            },
        ],
    };
};