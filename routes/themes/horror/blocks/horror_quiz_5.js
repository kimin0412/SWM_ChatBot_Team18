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
                text: '아남타워 B7',
                style: 'red',
            },
            {
                type: 'text',
                text: `"삑삑삑삑삑"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "당신은 떨리는 손가락으로 닫힘 버튼을 빠르게 누릅니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "집으로 간다는 생각에 설레었던 가슴은 기분 나쁜 고동으로 빠르게 뛰어가고 몸이 점점 떨리기 시작합니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"삐이이이-----------"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "버튼음이 아닌 경고음이 울리고 당신은 고개를 들어 엘레베이터의 전광판을 확인합니다.",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "[만 원]",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "분명 이 안에는 당신 혼자 뿐입니다. 머릿속을 파고드는 경고음 소리에 당신은 기절해버릴 것만 같습니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "전광판을 바라보고 있던 당신의 오른쪽에서 작게 웃음소리가 들립니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "쉭쉭 하고 바람빠진 듯한 기괴한 웃음소리에 당신의 몸은 굳어버리고 맙니다.",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
                type: 'text',
                text: `"빨간 카드가 여기있었네?"`,
                markdown: true,
            },
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "잔뜩 쉬어벌린 여자의 목소리가 들리더니 경고음이 멈춥니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "엘레베이터의 문이 닫히고 1층을 향해 올라가기 시작합니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"띵"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "1층에서 문이 열리고 잠시 굳어있던 당신은 구르듯 엘레베이터를 빠져나옵니다.",
                markdown: true,
            },
			{
				type: 'button',
				text: '집으로 가자',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_end_1',
				value: 'horror_end_1'
			},
        ],
    };
};