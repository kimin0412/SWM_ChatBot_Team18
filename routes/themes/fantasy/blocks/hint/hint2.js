module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '문제2 힌트',
				style: 'blue',
			},
			{
				type: 'text',
				text: '비석에 적힌 숫자는 무엇을 의미할까?',
				markdown: true,
			}
		],
	};
};