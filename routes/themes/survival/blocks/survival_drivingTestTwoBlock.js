module.exports = (data) => {
	return {
		text: "Page 15",
		blocks: [
			{
			  type: "header",
			  text: "Page 15",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/WsrsSHy/survival-driving-Test-Two-Block.gif"
			},
			{
			  type: "text",
			  text: "*감독관*: 핸들 똑바로 잡으세요!! 차가 흔들리잖아요!!\n\n 아니 차선 맞추라고!! 진짜 운전 *같이하네!!!\n\n하.. *실격*입니다.\n\n\n*폰머슬*: 아이 ** 그냥 밟습니다\n\n\n*감독관*: 아 진짜 ***!!!@@",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_drivingTestThreeBlock',
			  value: 'survival_drivingTestThreeBlock',
			}
		],
	};
};