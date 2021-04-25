module.exports = (data) => {
	return {
		title: '필기 시험 3번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_writtenTestThreeCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_writtenTestThreeModal',
				options: [
					{
						text: '(1) 좌측: 조수석, 우측: 운전석',
						value: '1',
					},
					{
						text: '(2) 좌측: 운전석, 우측: 조수석',
						value: '2',
					},
					{
						text: '(3) 좌측: 운전석, 우측: 운전석',
						value: '3',
					},
					{
						text: '(4) 좌측: 조수석, 우측: 운전석',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};