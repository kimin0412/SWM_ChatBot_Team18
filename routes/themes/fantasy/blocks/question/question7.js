module.exports = (order) => {
	return {
		text: 'Question',
		blocks: [
			{
				type: 'header',
				text: `${order}층: Maestro`,
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'꼭대기에 올라오니, 마에스트로가 기다리고 있었다. 마에스트로를 물리칠 주문을 외자',
				markdown: true,
			},
			{
				type: 'image_link',
				url:
					'https://i.ibb.co/9gfxg4R/maestro.png',
			},
		],
	};
};