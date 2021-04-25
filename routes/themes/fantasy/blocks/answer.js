module.exports = (order) => {
	placeholders = [
		'영어 4글자',
		'영어 5글자',
		'영어 4글자',
		'영어 6글자',
		'영어 7글자'
	];
	return {
		title: '정답 제출',
		accept: '확인',
		decline: '취소',
		value: `fantasy_result_${order}`,
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
				placeholder: `(${placeholders[order - 1]})`,
			},
		],
	};
}