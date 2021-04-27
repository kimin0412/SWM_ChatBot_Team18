module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
    return {
        text: '3번 문제 힌트입니다.',
        blocks: [
            {
                type: 'text',
                text: '힌트 : 카드의 도형을 영어로 바꿔보면...?',
                markdown: true,
            },
        ],
    };
};
