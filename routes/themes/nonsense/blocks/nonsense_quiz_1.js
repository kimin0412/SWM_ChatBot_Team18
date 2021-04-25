module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '문제 1',
                style: 'blue',
            },
            {
                type: 'text',
                text: '취업에 성공한 김솜아는 사내 동아리에 들기위해 게시판을 살펴 보았다.',
                markdown: true,
            },
            {
                type: 'text',
                text: '여러 포스터들 사이로 조금 이상한것이 보인다.',
                markdown: true,
            },
            {
                type: 'image_link',
                url: 'https://i.postimg.cc/BvY6RMxk/QRCode-Img.jpg',
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '힌트 보기',
                        style: 'danger',
                        action_type: 'submit_action',
                        action_name: 'nonsense_hint_1',
                        value: 'nonsense_hint_1',
                    },
                    {
                        type: 'button',
                        text: '정답 입력',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'nonsense_answer_1',
                        value: 'nonsense_answer_1',
                    },
                ],
            },
        ],
    };
};