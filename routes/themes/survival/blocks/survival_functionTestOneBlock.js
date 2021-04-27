module.exports = (data) => {
	return {
		text: "Page 9",
		blocks: [
			{
			  type: "header",
			  text: "Page 9",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/F79pf6F/survival-quiz.jpg"
			},
			{
			  type: "text",
			  text: "*<문제 1>*\n 소마씨. 기능 시험 시작합니다. 출발하세요.\n\n앗.. 뭔가 잊은 것 같다..! 출발 전에 하는 게 있었는데 뭐였지..?\n\n1. 기도\n2. 안전벨트\n3. 코인 가격 확인\n4. 멘토링 확인",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_functionTestOneModal',
			  value: 'survival_functionTestOneModal',
			}
		],
	};
};