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
					'Meteor~♬ 거대 meteor 난 네게 처박힐 meteor야\~~♪♫',
				markdown: true,
			},
			{
				type: 'button',
				text: '다음 단계로',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'fantasy_msg',
				value: 'question5',
			},
		],
	};
};