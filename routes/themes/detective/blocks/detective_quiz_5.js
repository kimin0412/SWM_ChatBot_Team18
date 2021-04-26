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
                text: '추리 테마🔍 - 문제 5',
                style: 'yellow',
            },
            {
                type: 'text',
                text:
                    `며칠 후 아침 어느 병원, 머리에 붕대를 감은 채 책을 읽고 있는 당신에게 처음 일을 의뢰했던 중년의 신사가 찾아온다.`,
                markdown: true,
            },
            {
                type: 'text',
                text:
                    `"꽤 고생하셨더군요. 사례에 대해서는 긍정적으로 검토 중입니다. 이제 정확히 어떤 일이 있었는지 들어보도록 할까요?"`,
                markdown: true,
            },
            {
                type: 'button',
                text: '대답하기 🔍',
                style: 'primary',
                action_type: 'call_modal',
                action_name: 'detective_answer_5',
                value: 'detective_answer_5',
            },
            {
                type: 'button',
                text: '힌트보기 👀',
                style: 'danger',
                action_type: 'submit_action',
                action_name: 'detective_hint_5',
                value: 'detective_hint_5',
            },
        ],
    };
};