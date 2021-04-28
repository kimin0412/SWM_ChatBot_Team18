module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
    return {
        text: '2번 문제 힌트입니다.',
        blocks: [
            {
                type: 'text',
                text: '힌트 : 색깔을 영어로 바꿔보자',
                markdown: true,
            },
        ],
    };
};
