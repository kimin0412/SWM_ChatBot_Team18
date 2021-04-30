module.exports = (order) => {
	return {
		text: 'Question2',
		blocks: [
			{
				type: 'header',
				text: `${order}층: Map`,
				style: 'blue',
			},
			{
				type: 'text',
				text:
					'아래는 아남 타워로 가는 약도라고 한다. 약도를 잘보고 아남 타워의 위치를 찾아보자',
				markdown: true,
			},
			{
				type: 'image_link',
				url: 'https://i.ibb.co/qCjY6sP/map.png',
			},
			{
				type: 'text',
				text: '아남 타워의 위치를 찾았다면, 위치를 나타내는 알파벳을 제출하자',
				markdown: true,
			},
		],
	};
};