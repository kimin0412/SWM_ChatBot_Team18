module.exports = (order) => {
	let blocks = [
		{
			type: 'header',
			text: '정답입니다!!!',
			style: 'blue',
		},
		{
			type: 'text',
			text: require('../questionData')(order, 'comment'),
			markdown: true,
		},
		{
			type: 'button',
			text: '다음으로',
			style: 'default',
			action_type: 'submit_action',
			action_name: 'fantasy_msg',
			value: `fantasy_question_${order + 1}`,
		},
	];
	if (require('../questionData')(order, 'comment_extra')) {
		blocks.push(require('../questionData')(order, 'comment_extra'));
	}
	return {
		text: 'Correcr answer',
		blocks: blocks,
	};
};