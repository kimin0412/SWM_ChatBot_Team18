module.exports = (data) => {
	return {
		text: "Page 20",
		blocks: [
			{
			  type: "header",
			  text: "Page 20",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/K9XscBJ/survival-shuttle-Two-Block.gif"
			},
			{
			  type: "text",
			  text: "*다른 사람들* : 9번이나 떨어지는게 말이 되나? ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ\n\n*기사님* : 저런..ㅋㅋㅋㅋ 그친구는 운전을 어지간히 못했나봐~",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_shuttleThreeBlock',
			  value: 'survival_shuttleThreeBlock',
			}
		],
	};
};