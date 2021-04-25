module.exports = (data) => {
	return {
		title: '필기 시험 1번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_writtenTestOneCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_writtenTestOneModal',
				options: [
					{
						text: '(1) 엑셀: 왼발, 브레이크: 오른발',
						value: '1',
					},
					{
						text: '(2) 엑셀: 왼발, 브레이크: 왼발',
						value: '2',
					},
					{
						text: '(3) 엑셀: 오른발, 브레이크: 왼발',
						value: '3',
					},
					{
						text: '(4) 엑셀: 오른발, 브레이크: 오른발',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};