module.exports = (order) => {
	console.log(order);
	return {
		text: 'Question3',
		blocks: [
			{
				type: 'header',
				text: `${order}층: TombStone`,
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'약도를 찾아가니 으스스한 분위기의 건물이 있었다.\n탑 근처로 다가가니 비석이 하나 있다.\n비석에는 문양이 새겨져 있다. 무엇을 의미하는 것일까?',
				markdown: true,
			},
			{
				type: 'image_link',
				url: 'https://i.ibb.co/yWNpL7v/tombstone-final.jpg',
			},
			{
				type: 'text',
				text:
					'   *(a, c, d, e, g, h, j, k)* \n   *(b, c, d, h, i, j)* \n   *(a, b, d, e, g, h, j, k)* \n   *(a, c, d, e, g, i, j, k)* \n   *(a, f, k, l)* ',
				markdown: true,
			},
		],
	};
};