const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);
	
    const userName = user.userName;
	
	await libDatabase.clearTheme(react_user_id, 'horror')
	
    return {
        text: '방탈출 - 공포 테마',
		blocks: [
            {
                type: 'header',
                text: '아남타워 소마센터',
                style: 'red',
            },
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/qVpa5y.jpg"
    		},
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "현재 시간은 오전 9시",
                markdown: true,
            },
			{
                type: 'text',
                text: "환하게 밝혀져 있는 소마센터 입구에는 새로운 안내문이 붙어있다.",
                markdown: true,
            },
			{
				type: "context",
				content: {
					type: "text",
					text: "[소마센터 안내문 (수정))](https://drive.google.com/file/d/1qWTpjIY--zx1XG1CsVXriQwPFKtbHlCd/view?usp=sharing)",
					markdown: true
				},
				image: {
				type: "image_link",
				url: "https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png"
				}
			},
			{
                type: 'text',
                text: "입구에는 연수생 두 명이 서서 안내문을 바라보고 있다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"음? 원래 마지막 문항이 이랬던가?"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "연수생 중 한 명이 이전과 달라진 듯한 안내문에 고개를 갸웃거립니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"뭐, 상관없겠지."`,
                markdown: true,
            },
			{
                type: 'text',
                text: "연수생은 대수롭지 않게 넘겨버리고는 멘토링에 참석하러 들어갑니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "사람들의 웃음소리와 인기척이 느껴지는 낮의 소마센터는 오늘도 평화롭습니다.",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: 'button',
				text: '랭킹 확인하기',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_ranking',
				value: 'horror_ranking',
			},
        ],
    };
};