const db = require('../../../libs/database/service/index');

exports.getBlock = async (body) => {
    const message = body['message'];
    const react_user_id = body['react_user_id'];

    console.log('로맨스 엔딩 페이지');

    // 소팅
    let users = await db.findAllUsers();
    users.sort((user1, user2)=>{
        if (!('themes' in user2) || !('romance' in user2['themes']) || !('score' in user2['themes']['romance'])){
            return 0
        }
        if (!('themes' in user1) || !('romance' in user1['themes']) || !('score' in user1['themes']['romance'])){
            return 0
        }
        const score1 = user1['themes']['romance']['score']
        const score2 = user2['themes']['romance']['score']
        const date1 = user1['themes']['romance']['dateCleared']
        const date2 = user1['themes']['romance']['dateCleared']
        if (score1 === score2){
            return date1 - date2
        }
        return score2 - score1   
    })
    
    // 필터링
    users = users.filter((user1)=>{
        if (!('themes' in user1) || !('romance' in user1['themes']) || !('score' in user1['themes']['romance'])){
            return false
        }
        return true
    })
    
    // console.log(users)
    // 찾기
    let currentIndex = -1
    for(let i=0;i<users.length;i++){
        // console.log(users[i]['userId'])
        // console.log(react_user_id)
        if (users[i]['userId'] === String(react_user_id)){
            currentIndex = i
            break
        }
    }
    console.log('현재 인덱스 ' + String(currentIndex))
    const currentScore = users[currentIndex]['themes']['romance']['score']
    const currentName = users[currentIndex]['userName']
    

    // 첫번째 메세지
    let result = '현우는 모쏠에서 탈출했다.';
    let image_url =
        'https://images.velog.io/images/leehj8896/post/8fdbb846-2e1d-4f8b-8ab4-c7e47bd56da4/image.png';
    if (currentScore < 80) {
        result = '현우는 썸에서 탈출했다.';
        image_url =
            'https://images.velog.io/images/leehj8896/post/c607b7ca-1aef-4901-80a0-096f4b15fcfd/image.png';
    }
    const contents1 = [
        '',
        result,
        '\n\n\n\n\n\n\n\n\n\n\n\n\n',
    ];
    
    // 랭킹
    let rank = []
    for(let i = 0; i < users.length; i++){
        if (i == 5) break
        const num = i+1
        const score = users[i]['themes']['romance']['score']
        const name = users[i]['userName']
        rank.push(String(num)+'등 ' + String(score)+'점 ' + name)
    }
    
    const contents2 = [
        '[당신의 등수는?]', 
        '', 
        String(currentIndex+1)+'등 ' + String(currentScore)+'점 ' + currentName, 
        '',
        '[전체 랭킹]', 
        '', 
        rank.join('\n'),
        '',
    ];

    return {
        conversationId: message.conversation_id,
        text: '결과',
        blocks: [
            {
                type: 'header',
                text: '결과',
                style: 'red',
            },
            {
                type: 'image_link',
                url: image_url,
            },
            {
                type: 'text',
                text: contents1.join('\n'),
                markdown: true,
            },
            {
                type: 'divider',
            },
            {
                type: 'text',
                text: contents2.join('\n'),
                markdown: true,
            },
            {
                type: 'button',
                text: '메인으로',
                style: 'default',
                action_type: 'submit_action',
                action_name: 'game_start',
                value: 'game_start',
            },
        ],
    };
};