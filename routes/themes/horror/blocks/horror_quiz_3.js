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
                text: '소마 센터 데스크 앞',
                style: 'red',
            },
            {
                type: 'text',
                text: `'헉...헉... 미X!! 안내문 진짜였어?!?!'`,
                markdown: true,
            },
			{
                type: 'text',
                text: `'간 떨어지는 줄 알았네... 근데 지갑은 도대체 어디있는거야...'`,
                markdown: true,
            },
			{
                type: 'text',
                text: "숨을 고르던 당신은 데스크 쪽에서 빛이 흘러나오는 것을 발견합니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'어디서 나오는 빛이지...?'`,
                markdown: true,
            },
			{
                type: 'text',
                text: "빛을 따라 데스크로 간 당신은 켜져있는 *노트북*을 발견합니다.",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/S52f9u.jpg"
			},
			{
				type: "divider"
			},
			{
                type: 'text',
                text: `'노트북에 분실물 관련 정보가 있지 않을까...? 풀어봐야겠다.'`,
                markdown: true,
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '카드가 뭘까...?',
                        style: 'danger',
                        action_type: 'submit_action',
                        action_name: 'horror_hint_3',
                        value: 'horror_hint_3',
                    },
                    {
                        type: 'button',
                        text: '오케 감 잡았다!',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'horror_answer_3',
                        value: 'horror_answer_3',
                    },
                ],
            },
        ],
    };
};