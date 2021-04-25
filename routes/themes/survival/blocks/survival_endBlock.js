// detective end block copy!! 
// thx ><
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;

    const userName = 'placeholder';
    const rank = '000' + '등';

    return {
        text: '방탈출 - 생존 테마',
        blocks: [
            { type: 'header', text: '게임 클리어 !! 🎉', style: 'yellow' },
            {
                type: 'description',
                term: '이름',
                content: { type: 'text', text: 'userName', markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '테마',
                content: { type: 'text', text: '생존', markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '클리어 시각',
                content: { type: 'text', text: action_time, markdown: false },
                accent: true,
            },
            {
                type: 'description',
                term: '현재 순위',
                content: {
                    type: 'text',
                    text: rank,
                    markdown: false,
                },
                accent: true,
            },
            {
                type: 'button',
                text: '테마 선택으로',
                style: 'primary',
                action_type: 'submit_action',
                action_name: 'game_start',
                value: 'game_start',
            },
        ],
    };
};