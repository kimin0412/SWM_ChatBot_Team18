module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '판타지 5: rainbow',
				style: 'blue',
			},
			{
				type: 'image_link',
				url:
					'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image3@3x.jpg', 
			},
			{
				type: 'text',
				text:
					'메테오를 날리니 천장이 무너지고 하늘이 보인다....\n 하늘에는 무지개가 떠 있다...\n\n보물은 어디에 있는걸까',
				markdown: true,
			},
			{
				type: 'text',
				text:
					'A<span style="color:navy">d</span><span style="color:orange">i</span><span style="color:blue">o</span><span style="color:purple">s</span>, <span style="color:red">A</span><span style="color:green">p</span><span style="color:yellow">r</span>il',
				markdown: true,
			},
			{
				type: 'action',
				elements: [
					{
						type: 'button',
						text: '정답',
						style: 'primary',
						action_type: 'call_modal',
						value: 'fantasy_answerModal5',
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: 'hint5',
					},
				],
			},
		],
	};
};