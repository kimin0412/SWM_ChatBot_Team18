module.exports = (data) => {
	return {
		title: '기능 시험 2번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_functionTestTwoCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_functionTestTwoModal',
				options: [
					{
						text: '(1) 좌측 레버를 내린다.',
						value: '1',
					},
					{
						text: '(2) 좌측 레버를 올린다.',
						value: '2',
					},
					{
						text: '(3) 좌측 레버를 뽑는다.',
						value: '3',
					},
					{
						text: '(4) 우측 레버를 내린다.',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};