module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '여긴 어디 나는 누구?',
                style: 'blue',
            },
            {
                type: 'text',
                text:
                    '정답을 맞추니 곧이어 다음 화면으로 바뀌었다. /n "이 동아리는 무슨동아리 인걸까..?" /n 의문점들만 남긴체 화면을 바라보았다.',
                markdown: true,
            },
            {
                type: 'text',
                text:
                    '"환영합니다."/n "저희 동아리는 국내 최대 규모의 인원수와 전국 각지의 회원들로 구성되어있습니다."\n "함께 하고싶으신 분은 아래를 클릭 해 주세요."',
                markdown: true,
            },
            {
                type: 'button',
                text: 'button',
                style: 'primary',
                action_type: 'submit_action',
                action_name: 'nonsense_move',
                value: 'nonsense_move',
            },
        ],
    };
};