module.exports = (data) => {
	const { message, actions, action_time, value, action_name } = data;
	let userName = '';
	const global_module = require('../../../global.js');
	userName = global_module.userName;
	return {
		text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: 'text',
				text: '인기척에 놀라 돌아보니 데스크 앞쪽에 종이가 한 장 떨어져있다.',
				markdown: true,
			},
			{
				type: 'text',
				text: `'아 뭐야... 종이네... ${userName}, 이 쫄보...!'`,
				markdown: true,
			},
			// {
			// type: 'image_link',
			// url: 'https://ibb.co/xYMfm3g',
			// },
			{
				type: 'divider',
			},
			{
				type: 'text',
				text: '(대충 쪽지에 퀴즈 있는 사진)',
				markdown: true,
			},
			{
				type: 'divider',
			},
			// {
			// 	type: 'image_link',
			// 	url: 'https://ibb.co/xYMfm3g',
			// },
			{
				type: 'text',
				text: `'회의실 비밀번호...? 비밀번호 투성이네...'`,
				markdown: true,
			},
			{
				type: 'text',
				text: `'일단 회의실로 가자'`,
				markdown: true,
			},
			
			{
				type: 'button',
				text: '회의실로 이동',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'horror_quiz_2',
				value: 'horror_quiz_2'
			},
		],
	};
};