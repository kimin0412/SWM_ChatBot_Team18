module.exports = () => {
	return {
		title: '정답 제출',
		accept: '확인',
		decline: '취소',
		value: '{request_modal의 응답으로 전송한 value 값}',
		blocks: [
			{
				type: 'label',
				text: '정답',
				markdown: true,
			},
			{
				type: 'input',
				name: 'input_name1',
				required: true,
				placeholder: '(몇 글자인지 적음)',
			},
		],
	};
};