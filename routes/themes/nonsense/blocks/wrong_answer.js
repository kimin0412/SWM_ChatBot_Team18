module.exports = () => {
    return {
        text: '오답입니다.',
        blocks: [
            {
                type: 'text',
                text: '틀렸습니다!',
                markdown: false,
            },
        ],
    };
};