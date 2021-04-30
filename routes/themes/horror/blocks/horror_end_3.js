const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);
	
	const userName = user.userName;
	
    return {
        text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/QKH1yl.jpg"
			},
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "등 뒤로 인기척이 점점 커지기 시작합니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "소름끼치는 웃음소리가 귓가에 울립니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "이럴리가 없습니다. *그 여자*가 집까지 따라왔을리가...",
                markdown: true,
            },
			{
                type: 'text',
                text: "방을 나가려고 움직여봤지만 몸이 말을 듣지 않습니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "당신은 눈물이 맺힌 눈동자를 굴려 서서히 다가오는 구두를 바라봅니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"안돼... 싫어.... 살려주세요...."`,
                markdown: true,
            },
			{
                type: 'text',
                text: "뒷덜미에 머리카락이 닿는 감각과 함께 당신의 의식은 멀어집니다.",
                markdown: true,
            },
			{
				type: 'button',
				text: '...',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_surprise',
				value: 'horror_surprise',
			},
        ],
    };
};