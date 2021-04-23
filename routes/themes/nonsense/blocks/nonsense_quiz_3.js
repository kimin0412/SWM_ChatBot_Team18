module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '문제 3',
                style: 'blue',
            },
            {
                type: 'text',
                text:
                    '도서관으로 오라는 말이겟지..?\n시간도 남는데 한번 가봐야겟다.',
                markdown: true,
            },
            {
                type: 'divider',
            },
            {
                type: 'text',
                text: '도서관에 도착하니 문은 잠겨있고 도어락에는 음성인식 버튼과 함께 작은 글귀가 써져있엇다.',
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