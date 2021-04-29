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
				text: `'돌아보지마 돌아보지마 돌아보지마 제발 궁금해하지마 ${userName}!!!'`,
				markdown: true,
			},
			{
				type: 'text',
				text: '움직이지 말라는 안내문의 경고가 머릿속에 맴돌았지만 당신은 호기심을 이기지 못하고 웃음소리가 나는 방향으로 고개를 돌립니다.',
				markdown: true,
			},
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/yN9OHj.jpg"
			},
			{
				type: "divider"
			},
			{
				type: 'text',
				text: '여자의 얼굴은 보이지 않지만 당신은 어쩐지 눈이 마주친 듯한 기분이 듭니다.',
				markdown: true,
			},
			{
				type: 'text',
				text: '그리고 여자의 고개가 서서히',
				markdown: true,
			},
			{
				type: 'text',
				text: '조금씩',
				markdown: true,
			},
			{
				type: 'text',
				text: '당신이 서있는 방향으로 돌아갑니다.',
				markdown: true,
			},
			{
				type: 'text',
				text: `'빠...빨간 카드는... 데스크에.. 마..맡겨 놨습니다...!!!'`,
				markdown: true,
			},
			{
				type: 'text',
				text: '여자의 고개가 완전히 돌아가기 전, 당신은 눈을 질끈 감고 안내문에 써있던 문장을 외칩니다.',
				markdown: true,
			},
			{
				type: 'text',
				text: '당신은 덜덜 떨리는 손을 마주 움켜쥔 채 꿈쩍 않고 기다리기 시작합니다.',
				markdown: true,
			},
			{
				type: 'text',
				text: '얼마의 시간이 지난 후 슬그머니 눈을 뜬 당신은 여자가 어느새 사라져있는 것을 발견합니다.',
				markdown: true,
			},
			{
				type: 'text',
				text: `'나가자. 나가야돼. 지갑은 여기 없어!!'`,
				markdown: true,
			},
			{
				type: 'button',
				text: '회의실을 나간다.',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_quiz_3',
				value: 'horror_quiz_3'
			},
		],
	};
};