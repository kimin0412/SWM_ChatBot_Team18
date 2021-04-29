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
                text: '추리 테마🔍 - 문제 4',
                style: 'yellow',
            },
            {
                type: 'text',
                text:
                    `컨테이너 내부, 당신은 *두통*을 느끼며 정신을 차린다. 컨테이너는 작은 불빛마저 들어올 틈이 없어 암흑과도 같다. 당신은 손전등을 꺼내 내부를 확인한다. 그리고 컨테이너가 손바닥 만한 상자들로 가득 차 있는 것을 보게된다. 당신이 상자들 중 하나를 열어보려는 순간 어둠 속에서 목소리가 들려온다.`,
                markdown: true,
            },
			{
				type: 'text',
				text: 
					`"그만두시오."`
			},
			{
				type: 'text',
				text: 
					`당신은 소리가 들려온 곳을 향해 손전등을 비춘다. 그곳에는 총상을 입은 것으로 보이는 남자가 가쁜 숨을 내쉬며 앉아있다. 그는 손으로 상처를 누른 채 컨테이너의 벽에 몸을 기대고 있다. 덥수룩한 수염과 튼실해 보이는 체격, 오랜 시간 햇빛에 그을린 듯한 얼굴을 통해 당신은 그의 직업을 유추해본다. 이 자가 바로 사라진 배의 선장임을 직감한 당신은 그에게 상자에 대해 질문한다.`
			},
			{
				type: 'text',
				text: 
					`"상자는 중요하지 않소. 당신이 찾는 물건은 이미 그들이 모두 가져갔을 거요."`
			},
			{
				type: 'text',
				text: 
					`당신은 컨테이너가 흔들리고 있음을 느낀다. 남자는 헐떡이며 말을 이어간다.`
			},
			{
				type: 'text',
				text: 
					`"배에 실린 거겠지. 그들은 포장을 다시 주인에게 돌려주려는 거요. 선물과 함께. 그래서 그만두라는 거요. 폭죽이 벌써 터지는 건 그들이 원하는게 아닐테고, 나도 뜨거운건 싫으니까."`
			},
			{
				type: 'text',
				text: 
					`당신은 상자를 확인하는 것을 그만두고 이곳에서 나갈 방법을 찾는다.`
			},
			{
			  "type": "image_link",
			  "url": "https://i.ibb.co/9H8dHry/keyboard.png"
			},
			{
				type: 'text',
				text: 
					`당신은 피가 묻은 키보드를 발견한다. 남자가 이미 문을 한 번 열어봤던 것으로 보인다. 당신은 그에게 나가는 방법을 물어본다.`
			},
			{
				type: 'text',
				text: 
					`"... 나는 이제 지쳤소. *당신은 무엇을 위해 여기에 온거요? 그리고 무엇을 겪었지?* 나는 그걸 견디지 못해 지친거요."`,
				markdown: true
			},
			{
				type: 'text',
				text: 
					`그는 눈을 감고 더이상 아무런 대꾸도 하지 않는다.`,
				markdown: true
			},
            {
                type: 'button',
                text: '입력하기 🔍',
                style: 'primary',
                action_type: 'call_modal',
                action_name: 'detective_answer_4',
                value: 'detective_answer_4',
            },
            {
                type: 'button',
                text: '힌트보기 👀',
                style: 'danger',
                action_type: 'submit_action',
                action_name: 'detective_hint_4',
                value: 'detective_hint_4',
            },
        ],
    };
};