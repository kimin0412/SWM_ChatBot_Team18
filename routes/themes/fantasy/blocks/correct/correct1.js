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
					'서울특별시 강남구 테헤란로 311을 찾아가자',
				markdown: true,
			},
			{
				type: 'button',
				text: '다음 층으로',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'fantasy_msg',
				value: 'question2',
			},
		],
	};
};