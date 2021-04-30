const db = require('../../../libs/database/service/index');

exports.getBlock = async (body) => {
    
    const message = body['message'];
    const react_user_id = body['react_user_id'];

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
        if (user1['themes']['romance']['score']===0){
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
    // console.log('현재 인덱스 ' + String(currentIndex))
    // const currentScore = users[currentIndex]['themes']['romance']['score']
    // const currentName = users[currentIndex]['userName']
    
	const imgs = [
		'https://i.ibb.co/F8L41P3/first.png',
		'https://i.ibb.co/dDwnNJ6/second.png',
		'https://i.ibb.co/WWtdMBx/third.png',
		'https://i.ibb.co/CKTk2Vz/fourth.png',
		'https://i.ibb.co/Nmm6TgD/fifth.png',
		'https://i.ibb.co/xJhgL8R/not-yet.png',
	];
    const rankListBlocks = [];
    for(let i=0; i<5; i++){
        let text;
        let img;
        if (i < users.length){
            const num = i+1
            const score = users[i]['themes']['romance']['score']
            const name = users[i]['userName']
            text = String(num)+'등 '+name+' '+ String(score)+'점'
            img = imgs[i];   
        }
        else{
            img = imgs[imgs.length - 1];
			text = '*NOT YET*\nnot yet';
        }
        rankListBlocks.push(
			{
				type: 'section',
				content: {
					type: 'text',
					text: '\n'+text,
					markdown: true,
				},
				accessory: {
					type: 'image_link',
					url: img,
				},
			},
			{ type: 'divider' }
		);
    }
    
	return {
        conversationId: message.conversation_id,
		text: '명예의 전당 - 연애',
		blocks: [
			{
				type: 'header',
				text: '명예의 전당 - 연애',
				style: 'yellow',
			},
			...rankListBlocks,
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '내 랭킹',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'romance_userRank',
						value: 'romance_userRank',
					},
					{
						type: 'button',
						text: '테마 선택',
						style: 'default',
						action_type: 'submit_action',
						action_name: 'game_start',
						value: 'game_start',
					},
				],
			},
		],
	};
}; 