module.exports = (data) => {
    const { message, actions, action_time, value, action_name } = data;
	let userName = "";
	const global_module = require('../../../global.js');
	userName = global_module.userName;
    return {
        text: '방탈출 - 공포 테마',
		blocks: [
            {
                type: 'header',
                text: '데스크의 노트북 앞',
                style: 'red',
            },
            {
                type: 'text',
                text: `"딸깍 딸깍"`,
                markdown: true,
            },
			{
                type: 'text',
                text: "당신은 침을 한번 삼키고 문서를 열어 봅니다.",
                markdown: true,
            },
			{
				type: "divider"
			},
			{
				type: "context",
				content: {
					type: "text",
					text: "[분실물 장부](https://drive.google.com/file/d/1LGz5BRKbjGgf0ytKj-AxwDrCKI4-0Lsl/view?usp=sharing)",
					markdown: true
				},
				image: {
				type: "image_link",
				url: "https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png"
				}
			},
			{
				type: "divider"
			},
			{
                type: 'text',
                text: `'흠... 12번 사물함 이라고..?'`,
                markdown: true,
            },
			{
                type: 'text',
                text: "당신은 오티때 들었던 사물함의 위치를 머릿속으로 되새겨보곤 발걸음을 옮깁니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: "사물함 앞에 도착한 당신은 빼곡히 늘어선 사물함을 휴대폰 플래쉬를 켜고 하나하나 살펴봅니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'1... 2... 3.......... 11... 12.. 이거다!'`,
                markdown: true,
            },
			{
                type: 'text',
                text: "12번 사물함을 발견한 당신은 방금 전 봤던 문서를 기억해냅니다.",
                markdown: true,
            },
			{
                type: 'text',
                text: `'아까 비고란에 비밀번호가 적혀있었지...?'`,
                markdown: true,
            },
            {
                type: 'action',
                elements: [
                    {
                        type: 'button',
                        text: '모르겠는데...',
                        style: 'danger',
                        action_type: 'submit_action',
                        action_name: 'horror_hint_4',
                        value: 'horror_hint_4',
                    },
                    {
                        type: 'button',
                        text: '규칙성을 알았어!',
                        style: 'primary',
                        action_type: 'call_modal',
                        action_name: 'horror_answer_4',
                        value: 'horror_answer_4',
                    },
                ],
            },
        ],
    };
};