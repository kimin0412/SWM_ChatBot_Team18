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
                text: '소마 센터 회의실',
                style: 'red',
            },
			{
				type: "image_link",
				url: "https://ifh.cc/g/MXcRbV.jpg"
    		},
            {
                type: 'text',
                text: `'와... 어두워....'`,
                markdown: true,
            },
			{
                type: 'text',
                text: "유리창 너머로 보이는 회의실은 불빛 하나 없는 암흑입니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "눈을 굴리며 지갑을 찾아보던 당신은 아무것도 보이지 않는 시야에 결국 한숨을 내쉽니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'들어가서 찾아봐야겠다. 밖에서는 아무것도 안보여.'`,
                markdown: true,
            },
			{
				type: "divider"
			},
			{
                type: 'text',
                text: `"철컥"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "회의실 안으로 들어가려 문을 힘차게 민 당신은 잠겨져 있는 문에 당황합니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'앗 잠겨있네... 망했다. 어떻게 열지..?'`,
                markdown: true,
            },
			{
                type: 'text',
                text: "문을 열기위해 주변을 둘러보던 당신은 방금 전 발견한 종이쪽지가 생각납니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'아까 종이쪽지..! 뭔가 적혀있지 않을까?'`,
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/IIH6Tu.jpg"
    		},
			{
				type: "divider"
			},
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '신호등이야 뭐야...',
                        style: 'danger',
                        action_type: 'submit_action',
                        action_name: 'horror_hint_2',
                        value: 'horror_hint_2',
                    },
                    {
                        type: 'button',
                        text: '회의실 비밀번호는...!',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'horror_answer_2',
                        value: 'horror_answer_2',
                    },
                ],
            },
        ],
    };
};