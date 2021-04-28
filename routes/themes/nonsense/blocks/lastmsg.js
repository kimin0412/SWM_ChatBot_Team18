module.exports = () => {
    return {
        text: '방탈출 - 넌센스 테마',
        blocks: [
            {
                type: 'header',
                text: '동아리 등록 완료',
                style: 'yellow',
            },
            {
                type: 'text',
                text: '"따르릉~ 전화가 울린다."',
                markdown: true,
            },
            {
                type: 'text',
                text: '"여보세요?"',
                markdown: true,
            },
            {
                type: 'text',
                text: '"축하합니다!" \n"아재개그 동아리에 최종 합격 하셧습니다!"',
                markdown: true,
            },
            {
                type: 'text',
                text: '"메일로 활동 가이드를 보내드렷습니다!\n 확인 하시고 앞으로 많은 활동 부탁드립니다!"',
                markdown: true,
            },
            {
                type: 'context',
                content: {
                    type: 'text',
                    text: '[동아리 활동 가이드](https://youtu.be/4Les0OrRuZ0)',
                    markdown: true,
                },
                image: {
                    type: 'image_link',
                    url: 'https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png',
                },
            },
            {
                type: 'text',
                text: '"아재개그 동아리엿다고...? 회원이 많다는건 전국의 부장님들을 말하는거엿나? \n 탈퇴는 어디서하지..."',
                markdown: true,
            },
            {
                type: 'text',
                text: '"THE END"',
                markdown: true,
            },
            {
                type: 'button',
                text: '테마 선택하기',
                style: 'default',
                action_type: 'submit_action',
                action_name: 'game_start',
                value: 'game_start',
            },
        ],
    };
};