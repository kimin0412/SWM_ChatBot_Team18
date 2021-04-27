module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
    return {
        text: '4번 문제 힌트입니다.',
        blocks: [
            {
                type: 'text',
                text: '힌트 : 숫자를 뒤집어보면 어떨까?',
                markdown: true,
            },
        ],
    };
};
