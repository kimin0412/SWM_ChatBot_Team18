module.exports = (data) => {
	return {
		text: "Page 28",
		blocks: [
			{
			  type: "header",
			  text: "Page 28",
			  style: "red"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/HDDpgF5/survival-quit-From-Shuttle-Four-Block.jpg"
			},
			{
			  type: "text",
			  text: "난생 처음으로 *사람한테 교통사고*를 당했다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "결과 보기",
			  style: "default",
			  action_type: 'submit_action',
        	  action_name: 'survival_endBlock',
              value: 'survival_endBlock',
			}
		],
	};
};