module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        title: '카드 정답 입력',
        accept: '이거였어!',
		decline: '다시 생각해보자',
        value: 'horror_check_6',
        blocks: [
            {
                type: 'label',
                text: '카드의 정답을 입력 해 주세요.',
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer',
                required: true,
                placeholder: '영어 10글자 (띄어쓰기 없이, 대문자)',
            },
        ],
    };
};
