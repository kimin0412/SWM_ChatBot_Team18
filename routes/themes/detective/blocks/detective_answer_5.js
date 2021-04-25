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
        value: 'detective_check_5',
        blocks: [
            {
                type: 'label',
                text: `"그날 화물선에 무슨 일이 일어났던 겁니까?"`,
                markdown: true,
            },
            {
                type: 'select',
                name: 'answer1',
                options: [
                    {
                        text: '배는 희망봉을 지나던 중 기기 오작동을 일으켰습니다.',
                        value: '1',
                    },
                    {
                        text: '배는 희망봉을 지나던 중 암초에 부딪혔습니다.',
                        value: '2',
                    },
                    {
                        text: '배는 희망봉을 지나던 중 습격을 받았습니다.',
                        value: '3',
                    },
                ],
                required: true,
                placeholder: '답변',
            },
            {
                type: 'label',
                text: `"침몰 신호는 어떻게 된 것 입니까?"`,
                markdown: true,
            },
            {
                type: 'select',
                name: 'answer2',
                options: [
                    {
                        text:
                            '배가 침몰하지는 않았습니다. 처벌을 두려워한 선장이 거짓 신호를 보내고 배를 숨기려 한 것입니다.',
                        value: '1',
                    },
                    {
                        text:
                            '배가 침몰하지는 않았고 조난 신호였습니다. 누군가 메세지를 변조했겠군요.',
                        value: '2',
                    },
                    {
                        text: '배는 그날 바다에 침몰했습니다. 다시 수색해보십시오.',
                        value: '3',
                    },
                ],
                required: true,
                placeholder: '답변',
            },
            {
                type: 'label',
                text: `"물건의 행방은 어떻게 된 것 입니까?"`,
                markdown: true,
            },
            {
                type: 'select',
                name: 'answer3',
                options: [
                    {
                        text:
                            '제 시간에 도착하지는 못했지만 선장은 정상적으로 운송을 수행했습니다.',
                        value: '1',
                    },
                    {
                        text:
                            '당신의 고객사가 개입해서 배를 운행할 수 없게 만들고 물건을 빼돌린 겁니다.',
                        value: '2',
                    },
                    {
                        text: '바다에 빠진 컨테이너를 고객사가 먼저 건져올린 겁니다.',
                        value: '3',
                    },
                ],
                required: true,
                placeholder: '답변',
            },
        ],
    };
};