module.exports = (data) => {
	return {
		text: "Page 12",
		blocks: [
			{
			  type: "header",
			  text: "Page 12",
			  style: "blue",
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/ZgRfsGy/survival-after-Function-Test-Block.jpg"
			},
			{
			  type: "text",
			  text: "필기보다 기능이 쉬웠던건 기분탓일까..? 아무튼 앞으로 한 관문 남았다!! 도로주행은 둘이서 볼 수 있다는데 나랑 같이 하는 사람은 누구일까??",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  action_type: 'submit_action',
			  action_name: 'survival_broadcastForDrivingTestBlock',
			  value: 'survival_broadcastForDrivingTestBlock',
			  style: 'primary'
			}
		],
	};
};