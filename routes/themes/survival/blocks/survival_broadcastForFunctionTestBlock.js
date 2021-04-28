module.exports = (data) => {
	return {
		text: "Page 7",
		blocks: [
			{
			  type: "header",
			  text: "Page 7",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/wcfT6gP/survival-broadcast-For-Function-Test-Block.jpg"
			},
			{
			  type: "text",
			  text: "소마씨는 지금 바로 기능시험장으로 이동해주시기 바랍니다. 다시 한 번 알립니다. 소마씨는 ...\n\n\n앗.. 나잖아? 빨리 가야겠다!!!",
			  markdown: true
			},
			{
			  type: "button",
			  text: "기능시험장으로",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_readyToFunctionTestBlock',
			  value: 'survival_readyToFunctionTestBlock',
			}
		],
	}
};