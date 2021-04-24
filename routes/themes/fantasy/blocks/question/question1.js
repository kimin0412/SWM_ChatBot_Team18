module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: '1층 :question name',
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
					'문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용문제내용',
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
						value: 'fantasy_answerModal1',
					},
					{
						type: 'button',
						text: '힌트',
						style: 'danger',
						action_type: 'submit_action',
						action_name: 'fantasy_hint',
						value: 'hint1',
					},
				],
			},
		],
	};
};