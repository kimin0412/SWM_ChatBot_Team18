module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '문제 4',
                style: 'blue',
            },
            {
                type: 'text',
                text: '"철컥 소리와 함께 문이 열렸다."',
                markdown: true,
            },
            {
                type: 'text',
                text: '도서관 안쪽에는 컴퓨터와 함께 한 무리의 사람들이 있엇다.\n 가까이 가서 귀를 기울여 보니 무언가를 중얼거린다.',
                markdown: true,
            },
            {
                type: 'text',
                text: '" 미국에서 비가 오면?... 미국에서 비가 오면?...?"',
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
                        action_name: 'nonsense_hint_4',
                        value: 'nonsense_hint_4',
                    },
                    {
                        type: 'button',
                        text: '정답 입력',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'nonsense_answer_4',
                        value: 'nonsense_answer_4',
                    },
                ],
            },
        ],
    };
};