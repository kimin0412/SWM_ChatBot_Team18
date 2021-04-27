module.exports = (order) => {
	return {
		text: 'Question',
		blocks: [
			{
				type: 'header',
				text: `${order}층 : 소마의 탑`,
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'들리는 소문에는 소마의 탑이란 곳에 마에스트로의 보물이 있다고 한다.\n소마의 탑의 위치가 숨겨져 있는 암호를 찾았다.\n 암호를 풀고 소마의 탑을 찾아보자',
				markdown: true,
			},
			{
				type: 'text',
				text:
					'*Russia*\n*Asia*\n*_ _ _ _*\n*Man*\n*Bicycle*\n*Spider*',
				markdown: true,
			},
		],
	};
};