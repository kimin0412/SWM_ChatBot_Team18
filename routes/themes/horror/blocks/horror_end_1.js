const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);
	
	const userName = user.userName;
	
    return {
        text: '방탈출 - 공포 테마',
		blocks: [
            {
                type: 'header',
                text: `${userName}의 집`,
                style: 'red',
            },
			{
                type: 'text',
                text: "집에 도착한 당신은 방으로 들어가 침대로 몸을 던집니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "오늘 일어난 일이 도무지 믿기지 않아 꿈이라고 생각하기로 합니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"근데... 아까 빨간카드 어쩌구 한건 뭐지...?"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "인상을 찡그리며 고민하던 당신은 고개를 젓고 생각을 떨쳐내려 합니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"지갑이나 확인해 봐야겠다... 뭐 없어진건 없겠지...?"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "당신은 주머니를 뒤적여 지갑을 꺼내고 내용물을 확인해봅니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"이게... 뭐야...?"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "내용물 사이에 보이는 것은",
                markdown: true,
            },
			{
                type: 'text',
                text: "아주 새빨간",
                markdown: true,
            },
			{
                type: 'text',
                text: "카드 한장.",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/WVoSFr.jpg"
			},
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "빨간 카드에는 이상한 기호들이 적혀져 있습니다.",
                markdown: true,
            },
			{
				type: 'button',
				text: '어떻게 할까...?',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_block_5',
				value: 'horror_block_5',
			},
        ],
    };
};