exports.getBlock = (message) => {
    return {
        view: {
            title: '정답 입력',
            accept: '확인',
            decline: '취소',
            value: 'romance_stage2_result',
            blocks: [
                {
                "type": "select",
                "name": "input_answer",
                "options": [
                    {
                      "text": "그래? 나는 그런거 안봐서 잘 모르겠네 ㅋㅋ",
                      "value": "1"
                    },
                    {
                      "text": "오 재밌겠다 일요일에 같이 보러 갈래?",
                      "value": "2"
                    },
                    {
                      "text": "그걸 이제 알았어? 정보가 느리네",
                      "value": "3"
                    },
                ],
                "required": true,
                "placeholder": "XX이의 대답은?"
                }
            ],
        },
    };
};