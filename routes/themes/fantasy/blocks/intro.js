module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: 'Fantasy Title',
				style: 'blue',
			},
			{
				type: 'image_link',
				url:
					'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image6@3x.jpg',
			},
			{
				type: 'text',
				text:
					'배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명배경설명',
				markdown: true,
			},
			{
				type: 'button',
				text: '게임 시작',
				style: 'default',
				action_type: 'submit_action',
				action_name: 'fantasy_msg',
				value: 'question1'
			},
		],
	};
};