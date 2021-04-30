const libDatabase = require('../../../../libs/database/').service;

/**
 * 함수 형식으로 구현해서 사용자가 보낸 데이터에 따라 동적으로 블록의 텍스트 등을 변경할 수 있도록 만듬
 */
module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;

    const user = await libDatabase.findUser(react_user_id);

    const userName = user.userName;

    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            {
                type: 'header',
                text: '추리 테마🔍 - 문제 1',
                style: 'yellow',
            },
            {
                type: 'text',
                text: `4월 30일 오후 3시 ${userName} 탐정사무소, 등 뒤의 창문으로 들어오는 햇빛을 받으며 당신은 느긋한 오후를 보내고 있다. 무료한 일과에 눈이 감기려는 순간 사무소의 문이 열린다. 깔끔히 정리된 헤어스타일과 고급 정장, 온화한 미소를 띈 얼굴의 중년 남자는 정적을 깨트리고 자신을 소개한다.`,
                markdown: true,
            },
            {
                type: 'text',
                text: `"안녕하십니까, ${userName}씨. 명성이 자자하시더군요. 거절할 수 없는 제안을 하나 하려합니다."`,
                markdown: true,
            },
            {
                type: 'divider',
            },
            {
                type: 'text',
                text: `3월 26일 오전 4시 남아프리카 공화국 남쪽 해역, 황당한 이유로 수에즈 운하를 통과하지 못한 선박 한 척이 희망봉을 지나고 있었다. 본인들이 무엇을 싣고 있는지 알 겨를이 없는 선원들은 그저 육지를 밟지 못할 날들이 길어짐에 가벼운 불평을 할 뿐이었다. 하지만 그들이 운송하는 것의 가치를 아는 단 한 사람, 선장은 이루 말할 수 없는 공포를 느끼며 항해를 재촉하고 있었다. 제시간에 목적지에 도착하지 못한다면 자신의 목이 온전치 못할 것임을 떠올리며.`,
                markdown: true,
            },
            {
                type: 'divider',
            },
            {
                type: 'text',
                text: `"그리고 배는 침몰했습니다. 정확히는, 침몰 신호를 받았죠. 저희는 그곳에 수색팀을 파견했고, 아무런 흔적도 찾을 수 없었습니다."`,
                markdown: true,
            },
            {
                type: 'text',
                text: `남자는 부드러운 표정을 유지한 채 손을 내밀어 뭔가를 보여주곤 말을 이어간다.`,
                markdown: true,
            },
            {
                type: 'image_link',
                url: 'https://i.ibb.co/x1p0V2x/badge.png',
            },
            {
                type: 'text',
                text: `"이 배지가 의미하는 곳으로 가시면 단서가 될 만한 정보들을 얻을 수 있을 겁니다. 시시콜콜한 사례금 이야기는 당신의 흥미를 끌지 못하겠죠. 이 일을 해결해주신다면 그 배의 *비밀*을 조금 나눠드리겠습니다."`,
                markdown: true,
            },
            {
                type: 'button',
                text: '대답하기 🔍',
                style: 'primary',
                action_type: 'call_modal',
                action_name: 'detective_answer_1',
                value: 'detective_answer_1',
            },
            {
                type: 'button',
                text: '힌트보기 👀',
                style: 'danger',
                action_type: 'submit_action',
                action_name: 'detective_hint_1',
                value: 'detective_hint_1',
            },
        ],
    };
};