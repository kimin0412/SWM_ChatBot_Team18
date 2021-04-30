module.exports = (data) => {
	return {
		title: '주행 시험 1번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_drivingTestOneCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_drivingTestOneModal',
				options: [
					{
						text: '(1) A-B-C-D',
						value: '1',
					},
					{
						text: '(2) C-A-D-B',
						value: '2',
					},
					{
						text: '(3) A-C-B-D',
						value: '3',
					},
					{
						text: '(4) B-A-D-C',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};