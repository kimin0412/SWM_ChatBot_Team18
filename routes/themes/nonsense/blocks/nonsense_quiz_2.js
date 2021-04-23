module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '문제 2',
                style: 'blue',
            },
            {
                type: 'text',
                text:
                    '"환영합니다. 이곳으로 찾아오세요"\n 라는 메시지와 함께 또 하나의 문제가 보인다.',
                markdown: true,
            },
            {
                type: 'divider',
            },
            {
                type: 'text',
                text: '"사내 도서관에서 책을 빌리고 3일이나 늦게 반납했다. 나는 무엇인가?"',
                markdown: true,
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '힌트 보기',
                        style: 'danger',
                        action_type: 'submit_action',
                        action_name: 'nonsense_hint_2',
                        value: 'nonsense_hint_2',
                    },
                    {
                        type: 'button',
                        text: '정답 입력',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'nonsense_answer_2',
                        value: 'nonsense_answer_2',
                    },
                ],
            },
        ],
    };
};