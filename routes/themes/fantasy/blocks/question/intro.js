module.exports = () => {
	return {
		text: 'Push alarm message',
		blocks: [
			{
				type: 'header',
				text: 'Fantasy Thema-intro',
				style: 'blue',
			},
			{
				type: 'image_link',
				url: 'https://i.ibb.co/spffVfk/intro.png',
			},
			{
				type: 'text',
				text:
					'*부, 명성, 힘 모든 것을 손에 넣은 사나이 마에스트로, 그가 남긴 한마디는 전세계 사람들을 모험으로 나가게 만들었다.*\n\n _내 보물말인가 원한다면 주지..._\n _어디 찾아봐라,_\n _이세상 모든 것을 그곳에 두고 왔다._',
				markdown: true,
			},
			{
				type: 'button',
				text: '게임 시작',
				style: 'primary',
				action_type: 'submit_action',
				action_name: 'fantasy_msg',
				value: 'fantasy_question_1',
			},
			{
                type: 'button',
                text: '랭킹 확인',
                style: 'default',
				action_type: 'submit_action',
				action_name: 'fantasy_ranking',
				value: 'fantasy_ranking_hof',
            },
			{
				type: 'divider',
			},
			{
				type: 'text',
				text:
					'*정답형식*\n영어인 경우 띄어쓰기 없이 소문자로 입력하시면 됩니다.\n한글인 경우 띄어쓰기 없이 한글로만 입력하시면 됩니다.',
				markdown: true,
			},
		],
	};
};