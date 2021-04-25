module.exports = (data) => {
	return {
		text: "Page 26",
		blocks: [
			{
			  type: "header",
			  text: "Page 26",
			  style: "red"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://img1.daumcdn.net/thumb/S240x240/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D3613C5C4471E01F"
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