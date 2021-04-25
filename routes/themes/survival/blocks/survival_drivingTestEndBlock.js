module.exports = (data) => {
	return {
		text: "Page 18",
		blocks: [
			{
			  type: "header",
			  text: "Page 18",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVC7rdLYCHhL6P9FSC6Q6gRdUKvf3dluOqpw&usqp=CAU"
			},
			{
			  type: "text",
			  text: "드디어 끝났다..! 죽을 뻔 했던 것 빼면 무난하게 합격했네.. 빨리 셔틀타고 집에 돌아가야지~!",
			  markdown: true
			},
			{
			  type: "button",
			  text: "셔틀 타러가기",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_shuttleOneBlock',
			  value: 'survival_shuttleOneBlock',
			}
		],
	};
};