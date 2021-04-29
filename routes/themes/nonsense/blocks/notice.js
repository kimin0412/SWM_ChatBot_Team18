module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '주의 사항',
                style: 'red',
            },
            {
                type: 'text',
                text:
                    '넌센스 테마에 오신것을 환영합니다! \n 모든 정답은 띄어쓰기 없이 적어주세요. \n문제는 총 5문제 이며 정답 공유는 지양 부탁드립니다!',
                markdown: true,
            },
            {
                type: 'image_link',
                url:
                    'https://images.unsplash.com/photo-1518783102280-23b455fb6d96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80',
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '명예의 전당',
                        style: 'default',
                        action_type: 'submit_action',
                        action_name: 'nonsense_rank_all',
                        value: 'nonsense_rank_all',
                    },
                    {
                        type: 'button',
                        text: '시작하기',
                        style: 'primary',
                        action_type: 'submit_action',
                        action_name: 'nonsense_quiz_start',
                        value: 'nonsense_quiz_start',
                    },
                ],
            },
        ],
    };
};