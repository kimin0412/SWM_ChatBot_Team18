module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '주의 사항',
                style: 'red',
            },
            {
                type: 'text',
                text:
                    '모든 정답은 띄어쓰기 없이 적어주세요. \n문제는 총 5문제 이며 정답 공유는 지양 부탁드립니다!',
                markdown: true,
            },           
        ],
    };
};