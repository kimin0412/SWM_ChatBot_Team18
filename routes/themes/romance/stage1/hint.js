exports.getBlock = (message) => {
    return {
        view: {
            title: '힌트',
            accept: '확인',
            decline: '취소',
            value: 'romance_stage1_question',
            blocks: [
                {
                  "type": "label",
                  "text": "힌트 텍스트",
                  "markdown": true
                },
            ],
        },
    };
};