module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
    return {
        title: '소마센터 비밀번호 입력',
        accept: '문을 연다.',
		decline: '다시 생각한다.',
        value: 'horror_check_1',
        blocks: [
            {
                type: 'label',
                text: '비밀번호를 입력 해 주세요.',
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer',
                required: true,
                placeholder: '영어 3글자 (대문자로)',
            },
        ],
    };
};
