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
                text: '소마 센터 이용 안내문',
                style: 'red',
            },
            {
                type: 'text',
                text: `환영합니다. ${userName} 연수생님`,
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: "context",
				content: {
					type: "text",
					text: "[소마센터 안내문](https://drive.google.com/file/d/1Ir7SOdLglkqokUMRr84vHqE843F_BaG3/view?usp=sharing)",
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
                type: 'text',
                text: "현재 시간은 자정이 지난 12시 15분",
                markdown: true,
            },
			{
                type: 'text',
                text: "멘토링이 끝난 후 집으로 돌아가려던 당신은 지갑을 회의실에 두고 온 것을 알아차렸습니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'큰일이네... 지갑이 없으면 집에 못가는데... 아씨.. 안내문을 괜히 봐서...'`,
                markdown: true,
            },
			{
				type: "image_link",
				url: "https://ifh.cc/g/vBe1QO.jpg"
    		},
			{
                type: 'text',
                text: "불이 꺼진 소마센터 앞에서 한참을 망설이던 당신은 이내 마음을 다잡습니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'그래 안내문이 진짜일리도 없고... 지갑만 찾고 얼른 나가자'`,
                markdown: true,
            },
			{
                type: 'text',
                text: "당신은 안내문에 있던 비밀번호를 생각해냅니다.",
                markdown: true,
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '모르겠는데...?',
                        style: 'danger',
                        action_type: 'submit_action',
                        action_name: 'horror_hint_1',
                        value: 'horror_hint_1',
                    },
                    {
                        type: 'button',
                        text: '아! 알았다!',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'horror_answer_1',
                        value: 'horror_answer_1',
                    },
                ],
            },
        ],
    };
};