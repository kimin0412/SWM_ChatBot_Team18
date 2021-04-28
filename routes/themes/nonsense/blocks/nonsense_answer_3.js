module.exports = () => {
    return {
        title: '문제 3번 정답입력',
        accept: '알겟다!',
        decline: '아닌가..?',
        value: 'nonsense_check_answer_3',
        blocks: [
            {
                type: 'label',
                text: '정답을 입력 해 주세요.',
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer_word',
                required: true,
                placeholder: '한글 4글자',
            },
        ],
    };
};