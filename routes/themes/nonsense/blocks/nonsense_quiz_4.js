module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '미소의 반댓말은 당기소',
                style: 'blue',
            },
            {
                type: 'text',
                text: '"철컥 소리와 함께 문이 열렸다."',
                markdown: true,
            },
            {
                type: 'text',
                text:
                    '도서관 안쪽에는 몇명의 사람들이 한 모니터를 바라보고 있엇다. \n "역시 사람이 있는게 맞았어!" \n 사람들에게 다가가니 어떤 문제를 풀고있는것 같았다. \n그들도 이 동아리에 들고싶은 사람들인걸꺼?',
                markdown: true,
            },
            {
                type: 'image_link',
                url:
                    'https://images.unsplash.com/photo-1581087724694-14c17b0c17fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            },
            {
                type: 'text',
                text: '사람들이 중얼거리는 말을 자세히 들어보니 이것이 문제인것 같다.',
                markdown: true,
            },
            {
                type: 'text',
                text:
                    '" 미국에서 비가 오면?... 미국에서 비가 오면?...? 흠... 그냥 비가오는거지 이게 무슨말이야!"',
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
                        action_name: 'nonsense_hint_4',
                        value: 'nonsense_hint_4',
                    },
                    {
                        type: 'button',
                        text: '정답 입력',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'nonsense_answer_4',
                        value: 'nonsense_answer_4',
                    },
                ],
            },
        ],
    };
};