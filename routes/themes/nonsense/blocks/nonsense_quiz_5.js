module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '문제 5',
                style: 'blue',
            },
            {
                type: 'text',
                text: '"회사 입사할때 받은 USB가 있엇던거같은데...?\n한번 꽂아 보자!"',
                markdown: true,
            },
            {
                type: 'text',
                text: '연결소리와 함께 "마지막 테스트"라는 글귀가 보인다.',
                markdown: true,
            },
            {
                type: 'text',
                text: '"귀와입만있는것은?"',
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
                        action_name: 'nonsense_hint_5',
                        value: 'nonsense_hint_5',
                    },
                    {
                        type: 'button',
                        text: '정답 입력',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'nonsense_answer_5',
                        value: 'nonsense_answer_5',
                    },
                ],
            },
        ],
    };
};