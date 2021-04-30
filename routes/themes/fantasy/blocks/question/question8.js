module.exports = (order) => {
	return {
		text: 'Question8',
		blocks: [
			{
				type: 'header',
				text: `${order}층: rainbow`,
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'메테오를 날리니 천장이 무너지고 하늘이 보인다....\n 하늘에는 무지개가 떠 있다...\n\n보물은 무엇일까?',
				markdown: true,
			},
			{
				type: 'image_link',
				url: 'https://i.ibb.co/ykWbvYM/adios.jpg',
			},
		],
	};
};