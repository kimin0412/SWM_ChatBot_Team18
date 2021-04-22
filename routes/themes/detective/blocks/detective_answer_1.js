module.exports = () => {
    return {
        title: '진실은 언제나 하나 !! ✨',
        accept: '제출',
        decline: '취소',
        value: 'detective_quiz_2',
        blocks: [
            {
                type: 'label',
                text: '정답은?',
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer_word',
                required: true,
                placeholder: 'N글자',
            },
            {
                type: 'select',
                name: 'answer_choice',
                options: [
                    {
                        text: '객관식 1번',
                        value: '1',
                    },
                    {
                        text: '객관식 2번',
                        value: '2',
                    },
                ],
                required: true,
                placeholder: '거짓말을 하는 사람은 누굴까?',
            },
        ],
    };
};