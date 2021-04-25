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
					'으악!!! 유령이다 빨리 도망치자!!!!',
				markdown: true,
			},
			{
				type: 'button',
				text: '다음 단계로',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'fantasy_msg',
				value: 'question3',
			},
		],
	};
};