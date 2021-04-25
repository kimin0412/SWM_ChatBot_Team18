module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '판타지 꼭대기 층: Maestro',
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
					'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image3@3x.jpg',
			},
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '정답',
						style: 'primary',
						action_type: 'call_modal',
						value: 'fantasy_answerModal4',
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: 'hint4',
					},
				],
			},
		],
	};
};