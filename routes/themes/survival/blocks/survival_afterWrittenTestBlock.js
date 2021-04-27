module.exports = (data) => {
	return {
		text: "Page 6",
		blocks: [
			{
			  type: "header",
			  text: "Page 6",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/n1yZfkF/survival-after-Written-Test-Block.jpg"
			},
			{
			  type: "text",
			  text: "음.. 헷갈리는 것이 몇 개 있었지만 나쁘지 않게 본 것 같아! 다음은 기능시험인가?",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_broadcastForFunctionTestBlock',
			  value: 'survival_broadcastForFunctionTestBlock',
			}
		],
	}
};