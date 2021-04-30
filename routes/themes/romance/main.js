const db = require('../../../libs/database/service/index')

exports.getBlock = async (body) => {
    
    console.log('로맨스 메인 페이지')
    
    const message = body['message']
    const react_user_id = body['react_user_id']
    
    const contents = [
        '지난달 막 전역한 모태솔로 현우.',
        '이번에 카페 알바에서 친해진 유정에게 호감이 간다.',
        '지금까지 고백할때마다 차였던 현우는 이번에야말로 잘해보고 싶다.',
        '현우는 과연 모태솔로에서 탈출할 수 있을까?',
        '',
        '<참고>',
        '현재 호감이 있는듯 없는듯 알듯말듯한 관계입니다.',
        '선택지 멘트 중 가장 적절한 멘트를 고르세요.',
        '각 문제는 객관식이며 선택지마다 점수가 차등적으로 부여됩니다.',
        '각 문제는 한 번씩만 선택할 수 있습니다.',
        '두 번째 이후부터는 점수에 반영되지 않습니다.',
        '출제자의 주관이 담겨있을 수 있으니 재미로만 봐주세요:)',
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
              text: "현우의 솔로 탈출",
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
                        text: '랭킹보기',
                        style: 'default',
                        action_type: 'submit_action',
                        action_name: 'romance_hallOfFame',
                        value: 'romance_hallOfFame',
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