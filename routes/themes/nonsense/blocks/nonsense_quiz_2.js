module.exports = () => {
    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            {
                type: 'header',
                text: '추리 테마🔍 - 문제 1 ',
                style: 'blue',
            },
            {
                type: 'text',
                text:
                    '문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문문제지문',
                markdown: true,
            },
            {
                type: 'image_link',
                url:
                    'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image3@3x.jpg',
            },
            {
                type: 'text',
                text: ' * 조건1\n * 조건2 \n * 조건3',
                markdown: true,
            },
            {
                type: 'button',
                text: '힌트 보기 👀',
                style: 'danger',
                action_type: 'submit_action',
                action_name:'nonsense_hint_1',
                value: 'nonsense_hint_1',
            },
            {
                type: 'button',
                text: '정답은?? 🔍',
                style: 'primary',
                action_type: 'call_modal',
                action_name: 'nonsense_answer_1',
                value: 'nonsense_answer_1',
            },
            
        ],
    };
};