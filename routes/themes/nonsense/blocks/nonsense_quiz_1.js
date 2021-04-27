module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '함께 할 동아리를 찾아보자',
                style: 'blue',
            },
            {
                type: 'text',
                text:
                    '소프트웨어 마에스트로를 성공적으로 마치고 취업에 성공한 김솜아는 사내 동아리활동을 하기위해 게시판을 살펴 보았다.',
                markdown: true,
            },
            {
                type: 'context',
                content: {
                    type: 'text',
                    text: '[밴드 동아리 부원 모집!](https://images.unsplash.com/photo-1501612780327-45045538702b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                    markdown: true,
                },
                image: {
                    type: 'image_link',
                    url: 'https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png',
                },
            },
            {
                type: 'context',
                content: {
                    type: 'text',
                    text: '[야구 동아리 SWINGS에서 함께 할 사람을 찾습니다!](https://images.unsplash.com/photo-1529768167801-9173d94c2a42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                    markdown: true,
                },
                image: {
                    type: 'image_link',
                    url: 'https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png',
                },
            },
            {
                type: 'context',
                content: {
                    type: 'text',
                    text: '[ · –　 – – · ·　](https://i.postimg.cc/BvY6RMxk/QRCode-Img.jpg)',
                    markdown: true,
                },
                image: {
                    type: 'image_link',
                    url: 'https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png',
                },
            },
            {
                type: 'context',
                content: {
                    type: 'text',
                    text: '[한사랑 산악회](https://www.youtube.com/playlist?list=PL1nP78IpsXsMkhTupzGC1QcHb4eJZQ-PY)',
                    markdown: true,
                },
                image: {
                    type: 'image_link',
                    url: 'https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png',
                },
            },
            {
                type: 'text',
                text: '여러 게시글들 사이로 조금 이상한것이 보인다.',
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