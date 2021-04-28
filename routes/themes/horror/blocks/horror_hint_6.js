module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
    return {
        text: '마지막 문제 힌트입니다.',
        blocks: [
            {
                type: 'text',
                text: '힌트 : ○ -> ● ',
                markdown: true,
            },
        ],
    };
};
