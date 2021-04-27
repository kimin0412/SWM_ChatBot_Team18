module.exports = (data) => {
	return {
		text: "Page 26",
		blocks:  [
			{
			  type: "header",
			  text: "Page 26",
			  style: "red",
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/h7ZHDmC/survival-quit-From-Shuttle-Two-Block.jpg"
			},
			{
			  type: "text",
			  text: "차에서 내린 뒤로는 기억이 잘 나질 않는다.\n\n나는 땅에 발이 닿기 무섭게 달렸다.\n왜냐하면...\n\n*5톤 트럭*같은 *사람*이 나를 전력으로 쫓아오고 있었기 때문이다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "danger",
			  action_type: 'submit_action',
			  action_name: 'survival_quitFromShuttleThreeBlock',
			  value: 'survival_quitFromShuttleThreeBlock',
			}
		],
	};
};