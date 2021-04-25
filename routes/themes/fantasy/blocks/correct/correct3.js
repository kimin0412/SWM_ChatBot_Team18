module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '정답입니다!!!',
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'쉿!!!\n\n들키지 않도록 조용히 지나가자.....',
				markdown: true,
			},
			{
				type: 'button',
				text: '다음 단계로',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'fantasy_msg',
				value: 'question4',
			},
		],
	};
};