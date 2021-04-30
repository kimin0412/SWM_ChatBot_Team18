const libDatabase = require('../../../../libs/database/').service;

/** * Ending Message */
module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;

    return {
        text: '방탈출 - 추리 테마',
        blocks: [
            {
                type: 'header',
                text: '추리 테마! 🔍',
                style: 'yellow',
            },
            {
                type: 'image_link',
                url: 'https://i.ibb.co/TwbsyC2/detective.png',
            },
            {
                type: 'text',
                text: '추리 테마에 온 것을 환영한다!',
                markdown: true,
            },
            {
                type: 'text',
                text: '추리 테마는 총 5개의 문제로 이루어져 있다. 🤡',
                markdown: true,
            },
            {
                type: 'text',
                text: '*문제를 잘 읽어봐야 할거야.* ',
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