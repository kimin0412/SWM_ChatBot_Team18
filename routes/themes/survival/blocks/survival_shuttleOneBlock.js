module.exports = (data) => {
	return {
		text: "Page 19",
		blocks: [
			{
			  type: "header",
			  text: "Page 19",
			  style: "blue"
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
			  text: "*기사님* : 오 학생이 마지막이구만!! 시험은 잘 봤나?\n\n소마 : 아 ㅎㅎ 같이 시험 본 사람때문에 죽을뻔 했던 것만 빼면 괜찮았어요. 운전을 얼마나 성격 *더럽게* 하는지..~ 그 사람은 재시험을 9번이나 봤다는데 또 떨어졌어요.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_shuttleTwoBlock',
			  value: 'survival_shuttleTwoBlock',
			}
		],
	};
};