exports.getBlock = (message) => {
    return {
        view: {
            title: '정답 입력',
            accept: '확인',
            decline: '취소',
            value: 'romance_stage1_result',
            blocks: [
                {
                "type": "select",
                "name": "input_answer",
                "options": [
                    {
                      "text": "아니? 무슨 소리야 너가 더 예뻐",
                      "value": "1"
                    },
                    {
                      "text": "와 그니깐 완전 내 스타일 번호 딸걸 ㅠ",
                      "value": "2"
                    },
                    {
                      "text": "눈만 보고 니가 어떻게 알아",
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