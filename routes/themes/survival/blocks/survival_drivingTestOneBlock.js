module.exports = (data) => {
	return {
		text: "Page 14",
		blocks: [
			{
			  type: "header",
			  text: "Page 14",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/KNx7YB7/survival-driving-Test-One-Block.jpg"
			},
			{
			  type: "text",
			  text: "*감독관* : 폰머슬씨.. 몇번째죠? 이러다가 우리 정들겠네요.\n아홉 번째 재시험 응시하실 거고요. 지금부터 시험 시작입니다. 출발하시면 됩니다.\n\n폰머슬 : 아, 예~ 알겠습니다 지금 출발할게요.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_drivingTestTwoBlock',
			  value: 'survival_drivingTestTwoBlock',
			}
		],
	};
};