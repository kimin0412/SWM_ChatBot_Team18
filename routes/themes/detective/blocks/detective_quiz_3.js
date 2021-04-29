/**
 * 함수 형식으로 구현해서 사용자가 보낸 데이터에 따라 동적으로 블록의 텍스트 등을 변경할 수 있도록 만듬
 */
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;

    const userName = 'placeholder';
    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            {
                type: 'header',
                text: '추리 테마🔍 - 문제 3',
                style: 'yellow',
            },
            {
                type: 'text',
                text: `늦은 밤 그리스 피레아스 항구, 당신은 수많은 컨테이너 틈에서 작은 손전등 불빛에 의지해 단서를 찾고 있다. 이윽고 특이한 컨테이너 무리를 발견한다. 컨테이너는 교차된 형태로 정렬되어 있다. 그 중 눈에 띄는 하얀색 컨테이너를 확인하려는 순간, 당신을 향해 강렬한 조명이 비춰진다.`,
                markdown: true,
            },
            {
                type: 'text',
                text: `"그 자식이 좀도둑을 보냈네."`,
            },
            {
                type: 'text',
                text: `당신의 뒤에서 분노를 드러낸 한 목소리가 들린다. 목소리의 주인공은 거대한 체격의 두 남성을 거느리고 있다. 당신은 차분한 목소리로 상황을 무마하려 한다. 하지만 그는 당신의 말을 무시하며 말한다.`,
            },
            {
                type: 'text',
                text: `"나도 알아. 난 그냥 그 자식이 탐정을 고용했다는 점에 열받았을 뿐이야. 자기가 잃어버려 놓고 날 의심받게 만들다니."`,
            },
            {
                type: 'text',
                text: `그의 뒤에 서있던 두 남성이 다가와 당신을 붙잡는다. 그들은 거칠게 당신의 몸을 돌려 컨테이너들을 바라보게 한다.`,
            },
            {
                type: 'image_link',
                url: 'https://i.ibb.co/7QWLGg3/container.png',
            },
            {
                type: 'text',
                text: `모든 컨테이너의 문에는 번호를 입력할 수 있는 잠금장치가 설치되어 있다. 숫자가 적힌 컨테이너들은 모두 잠금장치가 해제되어 있으며, 숫자는 잠금장치를 푼 다음 적힌 것으로 보인다.`,
            },
            {
                type: 'text',
                text: `"놀랐지? 바닷속에 빠졌다고 들었을텐데. 번호는 하나씩 다 눌러봤어, 우린 머리쓰는걸 싫어해서 말이야. 하지만 저기 하얀 녀석은 그럴 수가 없는 것 같더군."`,
            },
            {
                type: 'text',
                text: `그는 이미 모든 상황을 파악하고 있는 듯하다. 그는 당신을 노려보며 말한다.`,
            },
            {
                type: 'text',
                text: `"하얀색 컨테이너를 열어. 기회는 한 번이다."`,
            },
            {
                type: 'button',
                text: '입력하기 🔍',
                style: 'primary',
                action_type: 'call_modal',
                action_name: 'detective_answer_3',
                value: 'detective_answer_3',
            },
            {
                type: 'button',
                text: '힌트보기 👀',
                style: 'danger',
                action_type: 'submit_action',
                action_name: 'detective_hint_3',
                value: 'detective_hint_3',
            },
        ],
    };
};