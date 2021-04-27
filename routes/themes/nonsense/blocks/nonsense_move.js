module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: 'INTO THE DARKNESS',
                style: 'blue',
            },
            {
                type: 'text',
                text:
                    '등록 절차를 위해 도서관으로 와주시기 바랍니다. \n 아 참! \n 누군지는 모르겟지만 책을 빌릴때 마다 항상 늦게 반납하는 사람이 있는것 같더라구요.\n김솜아님은 안그러시겟죠?',
                markdown: true,
            },
            {
                type: 'image_link',
                url:
                    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2053&q=80',
            },
            {
                type: 'text',
                text: '"흠.. 책은 바로바로 반납해야지! 대체 누가 그런짓을 하는걸까?"',
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