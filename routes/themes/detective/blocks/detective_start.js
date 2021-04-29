const libDatabase = require('../../../../libs/database/').service;

/** * Ending Message */
module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;

    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            {
                type: 'header',
                text: '환영합니다 🔍',
                style: 'yellow',
            },
            {
                type: 'image_link',
                url: 'https://i.ibb.co/TwbsyC2/detective.png',
            },
            {
                type: 'text',
                text: '탐정 테마에 오신 것을 환영합니다!',
                markdown: true,
            },
            {
                type: 'text',
                text: '탐정 테마는 총 5개의 문제로 이루어져 있습니다.',
                markdown: true,
            },
            {
                type: 'text',
                text: '가장 먼저 테마를 클리어하시는 분에게는 소정의 상품을 드립니다. \n(클리어 시각은 최초 1회만 저장됩니다.)',
                markdown: true,
            },
            {
                type: 'text',
                text: '*문제를 잘 읽고* 답을 찾아주세요.',
                markdown: true,
            },
            {
                type: 'button',
                text: '시작하기 🔍',
                style: 'primary',
                action_type: 'submit_action',
                action_name: 'detective_quiz_1',
                value: 'detective_quiz_1',
            },
            {
                type: 'button',
                text: '랭킹 확인 🏆',
                style: 'default',
                action_type: 'submit_action',
                action_name: 'detective_ranking',
                value: 'detective_ranking',
            },
        ],
    };
};