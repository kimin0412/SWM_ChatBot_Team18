module.exports = (data) => {
	return {
		text: "Page 25",
		blocks: [
			{
			  type: "header",
			  text: "Page 25",
			  style: "red"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/wLz4nH5/survival-quit-From-Shuttle-One-Block.jpg"
			},
			{
			  type: "text",
			  text: "*기사님*: 학생! 도착했어. 면허 딴거 축하하고 조심히 들어가고.. \n아 키 큰 학생도 여기서 내려? 그래그래 어여 가!!\n\n어여 가라는 기사님의 말.. 마치 나한테 하는 것처럼 느껴졌다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "danger",
			  action_type: 'submit_action',
			  action_name: 'survival_quitFromShuttleTwoBlock',
			  value: 'survival_quitFromShuttleTwoBlock',
			}
		],
	};
};