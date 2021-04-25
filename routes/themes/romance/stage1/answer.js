exports.getBlock = (message) => {
    return {
        view: {
            title: 'romance_stage1_answer',
            accept: '확인',
            decline: '취소',
            value: 'romance_stage1_result',
            blocks: [
                {
                    type: 'input',
                    name: 'input_name',
                    required: true,
                    placeholder: '이름을 입력해주세요.',
                },
            ],
        },
    };
};