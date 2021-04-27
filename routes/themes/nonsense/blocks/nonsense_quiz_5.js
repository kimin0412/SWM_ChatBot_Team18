module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '안녕은 영원한 헤어짐은 아니겟지요',
                style: 'blue',
            },
            {
                type: 'text',
                text: '하!,,하하.. 문제들이 다 왜이러지? 어쨋든 USB에 뭐가 있는걸까?',
                markdown: true,
            },
            {
                type: 'text',
                text: '흠... 아! 그러고보니 회사에 입사했을때 받은 USB가 있엇던거같은데...?\n한번 꽂아 보자! ',
                markdown: true,
            },
            {
                type: 'image_link',
                url:
                    'https://images.unsplash.com/photo-1477949331575-2763034b5fb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
            },
            {
                type: 'text',
                text: '띠리링~ 연결소리와 함께 "마지막 테스트"라는 글자가 화면에 나타났다. \n',
                markdown: true,
            },
            {
                type: 'text',
                text: '"귀와 입만 있는것은?"',
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