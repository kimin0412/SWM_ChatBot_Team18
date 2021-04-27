module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '책벌레는 책을 먹고산다',
                style: 'blue',
            },
            {
                type: 'text',
                text: '도서관에 도착하니 문이 잠겨있엇다.\n 어쩔수 없이 돌아가려던 순간 도서관 내부에서 인기척 소리가 들린다.\n"분명 사람 목소리가 들리는것 같은데 왜 잠겨있는거지?"',
                markdown: true,
            },
            {
                type: 'image_link',
                url:
                    'https://images.unsplash.com/photo-1558002038-1055907df827?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
            },
            {
                type: 'text',
                text: '문의 손잡이에는 비밀번호 입력창과 조그마한 글귀가 보인다.',
                markdown: true,
            },
            {
                type: 'text',
                text: '"가는 것만 연구하는 사람은?"',
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
                        action_name: 'nonsense_hint_3',
                        value: 'nonsense_hint_3',
                    },
                    {
                        type: 'button',
                        text: '정답 입력',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'nonsense_answer_3',
                        value: 'nonsense_answer_3',
                    },
                ],
            },
        ],
    };
};