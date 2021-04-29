const libDatabase = require('../../../../libs/database/').service
const Config = require('config');

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
	if (actions.answer == Config.horror.answers.ans5) {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: `"동그라미들을 이어보면...."`,
					markdown: true,
				},
				{
					type: 'text',
					text: "스윽 스윽",
					markdown: true,
				},
				{
					type: 'text',
					text: "당신은 방에 있던 펜을 쥐고 기호 위에 선을 덧그립니다. ",
					markdown: true,
				},
				{
					type: 'text',
					text: "그렇게 모든 동그라미를 다 이으자, ",
					markdown: true,
				},
				{
					type: "divider"
				},
				{
					type: "image_link",
					url: "https://ifh.cc/g/fc8fUA.jpg"
				},
				{
					type: "divider"
				},
				{
					type: 'text',
					text: `"GIVE IT TO ME...? 나한테 달라고...?"`,
					markdown: true,
				},		
				{
					type: 'text',
					text: "완성된 글자를 읽자 당신의 등 뒤에서 웃음소리가 들리기 시작합니다.",
					markdown: true,
				},
				{
					type: 'button',
					text: '뒤를 돌아본다.',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_end_3',
					value: 'horror_end_3'
				},
			],
		};	
	}
	else {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: `"음...?"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "기호를 해석하다보니 카드가 알아볼 수 없을만큼 엉망이 되었습니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `"아씨... 이게 아닌가?"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "당신은 펜을 들고 다시 차분히 생각해봅니다.",
					markdown: true,
				},
				{
					type: 'button',
					text: '다시 해석하기',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_quiz_6',
					value: 'horror_quiz_6'
				},
			],
		};
	}
};