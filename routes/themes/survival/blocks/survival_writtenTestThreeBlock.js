module.exports = (data) => {
	return {
		text: "Page 5",
		blocks: [
			{
			  type: "header",
			  text: "Page 5",
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
			  text: "*<문제 3>*\n 자동차에는 차체의 양옆 상황을 확인해줄 수 있는 사이드미러가 존재한다. 이는 차량의 좌측과 우측에 각 한 개씩 존재하는데 운전자석이 좌측에 위치한 상황에서 각 사이드미러를 어디에 맞추어야 하는가?\n\n1. 좌측 : 조수석, 우측 : 운전석\n2. 좌측 : 운전석, 우측 : 조수석\n3. 좌측 : 운전석, 우측 : 운전석\n4. 좌측 : 조수석, 우측 : 조수석",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_writtenTestThreeModal',
			  value: 'survival_writtenTestThreeModal', // request 영역
			}
		],
	};
};