const libDatabase = require('../../../../libs/database/').service
const Config = require('config');

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;
	
	if (actions.answer == Config.horror.answers.ans4) {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: `"철커덕"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "사물함의 자물쇠를 맞추고 당기자 자물쇠가 열렸습니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'숫자를 뒤집으니 순서가 보이네...'`,
					markdown: true,
				},
				{
					type: "divider"
				},
				{
					type: "image_link",
					url: "https://ifh.cc/g/lci3l4.jpg"
				},
				{
					type: "divider"
				},
				{
					type: 'text',
					text: "사물함 안쪽을 살펴보던 당신은 지갑을 발견합니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `"찾았다!!!! 어흐헉... 내 지갑...!!!"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "당신은 하얀 지갑을 재빨리 빼내고는 발걸음을 재촉합니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "소마센터의 입구를 빠져나온 당신은 엘레베이터의 버튼을 빠르게 연타하며 초조한듯 센터를 힐끔거립니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'빨리... 빨리 나가야해...'`,
					markdown: true,
				},
				{
					type: 'text',
					text: "아까 전, 회의실에서 들렸던 웃음소리가 다시 들리는 듯한 착각이 듭니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "당신은 목덜미에 돋은 소름을 손으로 문지르고는 그래도 지갑은 찾았다는 생각을 하며 애써 안도합니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `"띵"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "엘레베이터가 7층에 도착하고 문이 열립니다.",
					markdown: true,
				},
				{
					type: 'button',
					text: '앨레베이터에 탄다.',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_event_4',
					value: 'horror_event_4'
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
					text: `"덜걱"`,
					markdown: true,
				},
				{
					type: 'text',
					text: "비밀번호가 맞지 않았던 건지 아무리 힘껏 잡아당겨도 자물쇠는 열리지 않습니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "몇번을 더 자물쇠를 잡아당겨보던 당신은 이내 단념한 듯 돌아섭니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: `'내일 다시오자....'`,
					markdown: true,
				},
				{
					type: 'text',
					text: "당신은 아침에 다시 와야겠다고 생각하며 소마센터를 떠납니다.",
					markdown: true,
				},
				{
					type: 'text',
					text: "코앞에 있는 지갑이 어른거리지만 어쩔 수 없었습니다.",
					markdown: true,
				},
				{
					type: 'divider',
				},
				{
					type: 'text',
					text: "지갑찾기 실패...",
					markdown: true,
				},
				{
					type: 'divider',
				},
				{
					type: 'button',
					text: '다시 풀어보기',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_quiz_4',
					value: 'horror_quiz_4'
				},
			],
		};
	}
};