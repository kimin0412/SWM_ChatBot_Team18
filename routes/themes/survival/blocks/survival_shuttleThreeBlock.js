module.exports = (data) => {
	return {
		text: "Page 23",
		blocks: [
			{
			  type: "header",
			  text: "Page 23",
			  style: "red"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/jWVZVqb/survival-shuttle-Three-Block.gif"
			},
			{
			  type: "text",
			  text: "ㅋㅋㅋㅋㅋㅋㅋㅋ...\n\n어 저 사람은 아까 같이 시험 봤던..?\n뭐야 방금 나를 노려본건가..?\n느낌이 좋지 않다.........",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "danger",
			  action_type: 'submit_action',
			  action_name: 'survival_shuttleFourBlock',
			  value: 'survival_shuttleFourBlock',
			}
		],
	};
};