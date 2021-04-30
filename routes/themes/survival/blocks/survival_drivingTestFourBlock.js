module.exports = (data) => {
	return {
		text: "Page 17",
		blocks: [
			{
			  type: "header",
			  text: "Page 17",
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
			  text: "*<문제 1>*\n 다음을 차선 변경 시에 *옳은 순서대로* 나열하시오.\n\nA. 방향 지시등을 켠다.\nB. 차선 변경을 한다.\nC. 변경할 차선에 차가 있는지 확인한다.\nD. 방향 지시등을 끈다.\n\n1. *A-B-C-D*\n2. *C-A-D-B*\n3. *A-C-B-D*\n4. *B-A-D-C*",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_drivingTestOneModal',
			  value: 'survival_drivingTestOneModal',
			}
		],
	};
};