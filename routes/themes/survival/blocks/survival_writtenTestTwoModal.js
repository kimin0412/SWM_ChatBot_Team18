module.exports = (data) => {
	return {
		title: '필기 시험 2번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_writtenTestTwoCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_writtenTestTwoModal',
				options: [
					{
						text: '(1) P, D',
						value: '1',
					},
					{
						text: '(2) R, N',
						value: '2',
					},
					{
						text: '(3) P, N',
						value: '3',
					},
					{
						text: '(4) R, D',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};