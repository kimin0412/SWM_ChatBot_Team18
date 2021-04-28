module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
    return {
        title: '노트북 비밀번호 입력',
        accept: '엔터!',
		decline: '건드려도 될까..?',
        value: 'horror_check_3',
        blocks: [
            {
                type: 'label',
                text: '노트북의 비밀번호를 입력 해 주세요.',
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer',
                required: true,
                placeholder: '영어 6글자 (대문자로)',
            },
        ],
    };
};
