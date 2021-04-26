module.exports = () => {
	return {
		title: '정답 제출',
		accept: '확인',
		decline: '취소',
		value: 'fantasy_result_1',
		blocks: [
			{
				type: 'label',
				text: '정답',
				markdown: true,
			},
			{
				type: 'input',
				name: 'answer',
				required: true,
				placeholder: '(4글자 영어)',
			},
		],
	};
};