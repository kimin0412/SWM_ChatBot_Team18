module.exports = (order) => {
	hints = [
		'기러기 - 기분 - 분해 - 해질녘 - .....',
		'비석에 적힌 숫자는 무엇을 의미할까?',
		'왕, 여왕, 주교, 탑, ...',
		'maestro는 7글자이다',
		'무지개는 빨주노초파남보이다'
	]
	return {
		text: 'hint message',
		blocks: [
			{
				type: 'header',
				text: `힌트${order}`,
				style: 'blue',
			},
			{
				type: 'text',
				text: hints[order - 1],
				markdown: true,
			}
		],
	};
};