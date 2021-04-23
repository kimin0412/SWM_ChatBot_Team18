/**
 * 함수 형식으로 구현해서 사용자가 보낸 데이터에 따라 동적으로 블록의 텍스트 등을 변경할 수 있도록 만듬
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const userName = 'placeholder'
    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            {
                type: 'header',
                text: '추리 테마🔍 - 문제 2',
                style: 'yellow',
            },
            {
                type: 'text',
                text:
                    `중국 상해, 당신은 커다란 판다 그림이 그려진 간판 아래 문으로 들어간다. 자욱한 담배 연기 속에서 당신은 커다란 테이블을 사이에 두고 앉아있는 네 사람을 발견한다. 어두운 조명 아래서 테이블 위에 놓인 마작판에 집중하던 그들은 인기척을 느끼자 동시에 고개를 당신 쪽으로 돌린다.`,
                markdown: true,
            },
			{
				type: 'text',
				text: 
					`"아 왔구만. 한 판 같이 하자구."`
			},
			{
				type: 'text',
				text: 
					`그중 한 사람이 당신을 향해 손짓하며 말한다. 당신은 그의 넉살좋은 말투에 홀린듯이 자리에 앉는다. `
			},
			{
			  "type": "image_link",
			  "url": "https://i.ibb.co/3cPT2qx/majac.png"
			},
			{
				type: 'text',
				text: 
					`당신은 나눠받은 패가 이상함을 눈치챈다. 그리고 이내 마작패에 당신이 원하는 정보가 숨겨져있음을 깨닫는다.`
			},
			{
				type: 'text',
				text: 
					`"자, 총 6개야. 아마 선생이 찾고 있는 건 그 배의 원래 목적지겠구만."\n"내가 가진 건 1번. 직접 거기로 *가보겠다*는 거지?"\n"내껀 2번이야. 그래 거기로 가보면 뭔가 *깨달을지도* 모르지."\n"난 5번이군. 천천히 *살펴보라고*. 급할거 뭐있나?"\n"선생은 세 개를 들고 있구만. 어때, *쉽지*?"\n"어디를 말하는 건지 알겠나?"`,
				markdown: true
			},
            {
                type: 'button',
                text: '대답하기 🔍',
                style: 'primary',
                action_type: 'call_modal',
                action_name: 'detective_answer_2',
                value: 'detective_answer_2',
            },
            {
                type: 'button',
                text: '힌트보기 👀',
                style: 'danger',
                action_type: 'submit_action',
                action_name: 'detective_hint_2',
                value: 'detective_hint_2',
            },
        ],
    };
};