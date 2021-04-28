const db = require('../../../libs/database/service/index')

exports.getBlock = async (body) => {
    
    console.log('로맨스 메인 페이지')
    
    const message = body['message']
    const react_user_id = body['react_user_id']
    
    const contents = [
        // '연애 모의고사',
        // '추후 검증된 연애 전문가들이 채점합니다.',
        '지난달 막 전역한 모태솔로 현우.',
        '이번에 카페 알바에서 친해진 유정에게 호감이 간다.',
        '지금까지 고백할때마다 차였던 현우는 이번에야말로 잘해보고 싶다.',
        '현우는 과연 모태솔로에서 탈출할 수 있을까?',
        '\n',
        '각 문제는 객관식이며 선택지마다 점수가 차등적으로 부여됩니다.',
        '감점 방식이므로 여러 번 클릭하면 점수가 추가로 차감됩니다.',
        '최종적으로 남아있는 점수로 랭킹이 산정됩니다.',
    ]

    
    const dbUser = await db.updateThemeInfo(
        react_user_id, 
        'romance', {
            'score': 0, 
            'romance_passed': 0}, 
        false)
    console.log(dbUser)

    
    return {
        conversationId: message.conversation_id,
        text: '현우의 솔로 탈출',
        blocks: [
            {
              type: "header",
              text: "현우의 모쏠 탈출",
              style: "red"
            },
            {
              type: "image_link",
              url: "https://images.velog.io/images/leehj8896/post/e512c923-02dc-490d-9a5f-b283cae3cf8c/image.png"
            },
            {
                type: 'text',
                text: contents.join('\n'),
                markdown: true,
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '뒤로가기',
                        style: 'default',
                        action_type: 'submit_action',
                        action_name: 'game_start',
                        value: 'game_start',
                    },
                    {
                        type: 'button',
                        text: '시작',
                        style: 'default',
                        action_type: 'submit_action',
                        action_name: 'romance_question_1',
                        value: 'romance_question_1',
                    },
                ],
            },
        ],
    }
}