const libDatabase = require('../../../../libs/database/').service;
const Config = require('config');

module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;

	const user = await libDatabase.findUser(react_user_id);

	const userName = user.userName;

	if (actions.answer == Config.horror.answers.ans1) {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: '띠리링',
					markdown: true,
				},
				{
					type: 'text',
					text: '비밀번호가 맞았던 건지 경쾌한 소리와 함께 문이 열립니다.',
					markdown: true,
				},
				{
					type: 'text',
					text:
						`'키보드 였구나.. ` +
						'*Q에서 오른쪽으로 3번, P에서 왼쪽으로 3번, Z에서 오른쪽으로 5번*' +
						`이었어!'`,
					markdown: true,
				},
				{
					type: 'text',
					text: `'` + '*RUN...?*' + `뛰라는 건가...?'`,
					markdown: true,
				},
				{
					type: 'text',
					text: '활기찼던 오전과 다르게 숨막히도록 적막한 센터.',
					markdown: true,
				},
				{
					type: 'text',
					text:
						'빛 한점 없는 곳에서 어둠이 몸을 타고 올라오듯 쎄한 느낌이 발목을 감아옵니다.',
					markdown: true,
				},
				{
					type: 'text',
					text: `'밤이라 그런지... 분위기 장난 아니네... 얼른 지갑이나 찾자..'`,
					markdown: true,
				},
				{
					type: 'text',
					text: `안쪽으로 걸음을 옮기려던 당신의 뒤로 '툭' 하는 인기척이 들립니다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '어떻게 하지...?',
					style: 'default',
					action_type: 'submit_action',
					action_name: 'horror_block_1',
					value: 'horror_block_1',
				},
			],
		};
	} else {
		return {
			text: '방탈출 - 공포 테마',
			blocks: [
				{
					type: 'text',
					text: '*삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑삑*',
					markdown: true,
				},
				{
					type: 'text',
					text: '비밀번호가 틀렸던 건지 조용하던 건물에 경고음 소리가 울려퍼집니다.',
					markdown: true,
				},
				{
					type: 'text',
					text: '머리까지 꽂히는 날카로운 경고음에 당신은 아찔해집니다.',
					markdown: true,
				},
				{
					type: 'text',
					text: `'아씨...'`,
					markdown: true,
				},
				{
					type: 'text',
					text: '어쩔 줄 몰라하던 당신은 이윽고 계단으로 빠르게 내려갑니다.',
					markdown: true,
				},
				{
					type: 'text',
					text: '홀로 남겨진 지갑이 어른거리지만 어쩔 수 없었습니다.',
					markdown: true,
				},
				{
					type: 'divider',
				},
				{
					type: 'text',
					text: '지갑찾기 실패...',
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
					action_name: 'horror_quiz_1',
					value: 'horror_quiz_1',
				},
			],
		};
	}
};