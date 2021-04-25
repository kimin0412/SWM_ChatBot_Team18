module.exports = (data) => {
	return {
		text: "Page 10",
		blocks: [
			{
			  type: "header",
			  text: "Page 10",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
			},
			{
			  type: "text",
			  text: "*<문제 2>*\n 곧 있으면 *좌회전* 구간이야. *좌측 방향 지시등*을 켜야겠어.\n공식이 있었는데... *핸들을 돌리는 방향과 레버 방향이 동일하다*고 했지?\n\n1. 좌측 레버를 내린다.\n2. 좌측 레버를 올린다.\n3. 좌측 레버를 뽑는다.\n4. 우측 레버를 내린다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_functionTestTwoModal',
			  value: 'survival_functionTestTwoModal',
			}
		],
	};
};