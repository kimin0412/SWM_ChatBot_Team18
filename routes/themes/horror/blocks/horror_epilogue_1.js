module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
	let userName = "";
	const global_module = require('../../../global.js');
	userName = global_module.userName;
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
				type: "divider"
			},
			{
				type: 'button',
				text: '랭킹 확인하기',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_ranking_1',
				value: 'horror_ranking_1',
			},
        ],
    };
};