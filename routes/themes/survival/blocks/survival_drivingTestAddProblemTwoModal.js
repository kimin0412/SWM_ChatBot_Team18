module.exports = (data) => {
	return {
		title: '주행 시험 3번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_drivingTestAddProblemTwoCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_drivingTestAddProblemTwoModal',
				options: [
					{
						text: '(1) 휘발유',
						value: '1',
					},
					{
						text: '(2) 경유',
						value: '2',
					},
					{
						text: '(3) LPG 가스',
						value: '3',
					},
					{
						text: '(4) 참이슬',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};