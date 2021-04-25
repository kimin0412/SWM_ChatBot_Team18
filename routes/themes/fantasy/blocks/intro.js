module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: 'Fantasy Thema - intro',
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
					'부, 명성, 힘 모든 것을 손에 넣은 사나이 마에스트로, 그가 남긴 한마디는 전세계 사람들을 흥분시켰다.\n\n _내 보물말인가 원한다면 주지 어디 찾아봐라, 이세상 모든 것을 그곳에 두고 왔다._ ',
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