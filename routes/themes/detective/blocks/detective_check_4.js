/**
 * 매개변수를 통해 정답 체크 후 정답 여부에 따라 다른 블록 생성
 * 정답 메세지의 경우 버튼이 다음 단계의 메세지를 호출하도록
 * 오답 메세지의 경우 버튼이 이번 단계의 메세지를 다시 호출하도록 설정
*/
module.exports = (data) => {
    const { message, actions, action_time, value, action_name, react_user_id } = data
	
	if (actions.answer == 'nopainnogain') {
		return {
			text: '방탈출 - 추리 테마',
			blocks: [
				{
					type: 'image_link',
					url: 'https://i.ibb.co/1QPxBMp/yes-4.jpg'
				},
				{
					type: 'text',
					text:
						`당신은 쏟아져 들어오는 햇빛에 눈을 가린다. 배는 천천히 목적지를 향해 나아가고 있다. 컨테이너 안에서 목소리가 들려온다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"희망봉에서 배가 습격을 받았을 때, 이곳에 들어와 몸을 숨겼소. 조난 신호를 보내고 밖이 잠잠해지기만을 기다렸지. 이 바닥에서 해적들은 흔한 일이고, 이 안을 드나드는 법을 아는 사람은 오직 나 하나였으니. 버티면 된다고 생각했소. 그리고 내심 기뻤지, 목이 날아가진 않겠구나. 동정표를 받을 거리가 생겼으니."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`남자는 감싸고 있던 상처를 가리키며 말했다. 상처는 시간이 꽤 지난 것으로 보인다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"하지만 문을 열었을 때 본 광경은 예상과는 달랐소. 다행히 문은 급하게 다시 닫았지만, 꼼짝없이 갇혀버린거요. 그리고 당신이 문을 열었고, 물건은 그들이 다 털어갔지. 난 이런 꼴이 된 채로 남겨졌소. 딱히 동정하지도 않더군. 당신도 그를 만나봤으니 알거요. 제멋대로인데다 애초에 그런 감정따윈 없는 사람이었던 게야."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`그는 당신의 눈을 바라보며 말한다.`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`"나는 여지껏 두려움에 떨기만 하며 살았소. 고통 없이 얻을 수 있는 것은 아무것도 없는데. 결국 이렇게 되는군."`,
					markdown: true,
				},
				{
					type: 'text',
					text:
						`선장은 당신에게 숨겨두었던 조난신호 발신기를 건낸다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '다음으로 🛫',
					style: 'primary',
					action_type: 'submit_action',
					action_name: 'detective_quiz_5',
					value: 'detective_quiz_5'
				},
			],
		};	
	}
	else {
		return {
			text: '방탈출 - 추리 테마',
			blocks: [
				{
					type: 'text',
					text:
						`문은 미동도 하지 않는다. 곧 손전등의 불빛이 몇 번 깜빡거리다 꺼진다. 당신은 생각하기를 그만둔다.`,
					markdown: true,
				},
				{
					type: 'button',
					text: '틀렸습니다... 💀',
					style: 'danger',
					action_type: 'submit_action',
					action_name: 'detective_quiz_4',
					value: 'detective_quiz_4'
				},
			],
		};
	}
};