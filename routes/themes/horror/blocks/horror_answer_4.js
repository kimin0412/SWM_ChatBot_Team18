module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        title: '사물함 비밀번호 입력',
        accept: '잘그락 잘그락',
		decline: '부셔버릴까...',
        value: 'horror_check_4',
        blocks: [
            {
                type: 'label',
                text: '사물함의 비밀번호를 입력 해 주세요.',
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer',
                required: true,
                placeholder: '숫자 3자',
            },
        ],
    };
};
