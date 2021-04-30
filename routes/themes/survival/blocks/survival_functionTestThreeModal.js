module.exports = (data) => {
	return {
		title: '기능 시험 3번 문제',
		accept: '확인',
		decline: '취소',
		value: 'survival_functionTestThreeCheck',
		blocks: [
			{
				type: 'select',
				name: 'survival_functionTestThreeModal',
				options: [
					{
						text: '(1) 급정거 후 뒷목을 잡으며 내린다.',
						value: '1',
					},
					{
						text: '(2) 비상등을 켜고 엑셀을 밟아 빠르게 지나간다.',
						value: '2',
					},
					{
						text: '(3) 고개를 앞으로 숙여 클락션을 꾹 누른 채로 기절한다.',
						value: '3',
					},
					{
						text: '(4) 빠르게 브레이크를 밟아 멈춘 후, 비상등을 켠다.',
						value: '4',
					},
				],
				required: true,
				placeholder: '정답을 선택해주세요',
			},
		],
	};
};