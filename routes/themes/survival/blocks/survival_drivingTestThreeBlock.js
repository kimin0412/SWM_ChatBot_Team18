module.exports = (data) => {
	return {
		text: "Page 16",
		blocks: [
			{
			  type: "header",
			  text: "Page 16",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/RQ7jSxm/survival-driving-Test-Three-Block.jpg"
			},
			{
			  type: "text",
			  text: "*감독관*: 하.. 간신히 돌아왔네.. 소마씨 앞에 타세요. 폰머슬씨는 뒤에 타시고요. 지금부터 시험 시작입니다.\n\n\n와...진짜 죽을뻔 했다..\n빨리 시험보고 집에나 가자..",
			  markdown: true
			},
			{
			  type: "button",
			  text: "도로주행 시험 시작",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_drivingTestFourBlock',
			  value: 'survival_drivingTestFourBlock',
			}
		],
	};
};