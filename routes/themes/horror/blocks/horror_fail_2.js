const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
	return {
		text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: 'text',
				text: "웃음소리를 들은 당신은 온몸의 피가 빠져나가는 듯한 기분이 듭니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "오전에 봤던 소마센터 안내문의 내용이 머릿속에 어지럽게 떠오르고 심장이 빠르게 뛰기 시작합니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "내용을 떠올리는 중에도 등 뒤의 웃음소리는 점점 더 기괴하게 커지며 가까이 다가옵니다.",
				markdown: true,
			},
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/rpPqD4.png"
			},
			{
				type: 'text',
				text: `"또각"`,
				markdown: true,
			},
			{
				type: 'text',
				text: `"또각"`,
				markdown: true,
			},
			{
				type: "divider"
			},
			{
				type: 'text',
				text: "아무도 없는 회의실에서 절대 들릴리 없는, 들려서는 안되는 구두 소리가 귓가에 맴돕니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "이마에 식은땀이 맺히기 시작합니다. 이곳을 당장 나가야 합니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "당신은 회의실 문을 부술 듯 밀치고 소마센터의 입구로 달려나갑니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "점점 멀어지는 웃음소리에 정신이 아득해집니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "홀로 남겨진 지갑이 어른거리지만 어쩔 수 없었습니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "지갑찾기 실패...",
				markdown: true,
			},
			{
				type: 'button',
				text: '돌아가기',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_block_2',
				value: 'horror_block_2'
			},
		],
	};
	
};