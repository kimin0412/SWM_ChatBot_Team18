module.exports = (data) => {
	return {
		title: '주행 시험 2번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_drivingTestAddProblemOneCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_drivingTestAddProblemOneModal',
				options: [
					{
						text: '(1) 창문을 열고 엄지손가락을 세운다.',
						value: '1',
					},
					{
						text: '(2) 비상등을 잠시 켰다가 끈다.',
						value: '2',
					},
					{
						text: '(3) 차에서 내린 후, 고맙다고 인사하러 간다.',
						value: '3',
					},
					{
						text: '(4) 급브레이크를 밟아 놀래켜준다.',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};