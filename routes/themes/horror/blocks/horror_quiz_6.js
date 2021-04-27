module.exports = (data) => {
	const { message, actions, action_time, value, action_name } = data;
	let userName = '';
	const global_module = require('../../../global.js');
	userName = global_module.userName;
	return {
		text: '방탈출 - 공포 테마',
		blocks: [
			{
				type: 'header',
				text: `${userName}의 집`,
				style: 'red',
			},
			{
				type: 'text',
				text: `"이 기호들은 뭐지...?"`,
				markdown: true,
			},
			{
				type: 'divider',
			},
			{
				type: 'image_link',
				url: 'https://ifh.cc/g/CNmaY6.jpg',
			},
			{
				type: 'divider',
			},
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '전혀 모르겠는걸...?',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'horror_hint_6',
						value: 'horror_hint_6',
					},
					{
						type: 'button',
						text: '아 이거구나',
						style: 'primary',
						action_type: 'call_modal',
						action_name: 'horror_answer_6',
						value: 'horror_answer_6',
					},
				],
			},
		],
	};
};