module.exports = (order) => {
	comments = [
		"서울특별시 강남구 테헤란로 311을 찾아가자",
		"으악!!! 유령이다 빨리 도망치자!!!!",
		"쉿.....\n들키지 않도록 조용히 지나가자.....",
		"Meteor~♬ 거대 meteor 난 네게 처박힐 meteor야\~~♪♫",
		"부탁드려요~~"
	]
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
				text: comments[order - 1],
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
		],
	};
};