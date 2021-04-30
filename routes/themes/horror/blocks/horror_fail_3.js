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
				text: "당신은 문서를 발견했지만 잠깐의 고민 후 노트북을 덮습니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: `'그래... 괜히 함부로 건드리지 말자...'`,
				markdown: true,
			},
			{
				type: 'text',
				text: "당신은 아침에 다시 와야겠다고 생각하며 소마센터를 떠납니다.",
				markdown: true,
			},
			{
				type: 'text',
				text: "홀로 남겨진 지갑이 어른거리지만 어쩔 수 없었습니다.",
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
				text: '돌아가기',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_block_3',
				value: 'horror_block_3'
			},
		],
	};
	
};