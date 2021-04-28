module.exports = (data) => {
	return {
		title: '기능 시험 1번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_functionTestOneCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_functionTestOneModal',
				options: [
					{
						text: '(1) 기도',
						value: '1',
					},
					{
						text: '(2) 안전벨트',
						value: '2',
					},
					{
						text: '(3) 코인 가격 확인',
						value: '3',
					},
					{
						text: '(4) 멘토링 확인',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};