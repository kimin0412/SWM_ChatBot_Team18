/**
 * accept 버튼 클릭 시 동일 문제 단계의 check 메세지 호출하도록 설정
 * check 메세지 호출 단계에서 정답 여부 판단
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const quote = (react_user_id % 2 == 0) ? '좋습니다. 비밀이라,\n탐정을 유혹하는 법을 아시는군요.' : '비밀? 글쎄 구미가 그리 당기진 않는데,\n의뢰를 거절할 이유도 딱히 없군요.'
	
    return {
        title: '진실은 언제나 하나 !! ✨',
        accept: '확인',
        decline: '취소',
        value: 'detective_check_1',
        blocks: [
            {
                type: 'label',
                text: quote,
                markdown: true,
            },
            {
                type: 'select',
                name: 'answer',
                options: [
                    {
                        text: '1. 호주 퍼스, 캥거루(Kangaroo) 코퍼레이션',
                        value: '1',
                    },
                    {
                        text: '2. 프랑스 파리, 코크(Coq) 엔터프라이즈',
                        value: '2',
                    },
                    {
                        text: '3. 파나마 파나마시티, 라나(Rana) 컴퍼니',
                        value: '3',
                    },
                    {
                        text: '4. 중국 상해, 슝마오(Xiongmao) 유한회사',
                        value: '4',
                    },
                    {
                        text: '5. 터키 앙카라, 쿠르트(Kurt) 그룹',
                        value: '5',
                    }
                ],
                required: true,
                placeholder: '어디로 가야 할까?',
            },
        ],
    };
};