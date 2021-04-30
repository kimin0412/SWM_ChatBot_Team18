const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data;
	
	const user = await libDatabase.findUser(react_user_id);
	
	const userName = user.userName;
    
	return {
        text: '방탈출 - 공포 테마',
		blocks: [
			{
                type: 'text',
                text: `"으... 으아아...!!"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "빨간 카드를 발견한 당신은 서랍을 뒤적여 라이터를 찾아냅니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"화르륵"`,
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: "image_link",
				url: "https://ifh.cc/g/LZu8l3.gif"
			},
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "불이 붙은 카드는 순식간에 재가 되어 사라졌습니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "바닥에 떨어진 그을음 자국을 보며 당신은 멍한 표정으로 중얼거립니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `"다신 안가... 소마센터......"`,
                markdown: true,
            },
			{
				type: "divider"
			},
			{
                type: 'text',
                text: "공포 테마 - End",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: 'button',
				text: '기호가 궁금한데...',
				style: 'danger',
				action_type: 'submit_action',
				action_name: 'horror_block_5',
				value: 'horror_block_5',
			},
        ],
    };
};