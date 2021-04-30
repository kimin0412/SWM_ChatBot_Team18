/**
 * accept 버튼 클릭 시 동일 문제 단계의 check 메세지 호출하도록 설정
 * check 메세지 호출 단계에서 정답 여부 판단
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
    return {
        title: '진실은 언제나 하나 !! ✨',
        accept: '확인',
        decline: '취소',
        value: 'detective_check_4',
        blocks: [
            {
                type: 'label',
                text: `'죽을 때가 되니 해탈한건가, 격언같은 말을 하는군.'`,
                markdown: true,
            },
            {
                type: 'input',
                name: 'answer',
                required: true,
                placeholder: '영어, 소문자',
            },
        ],
    };
};