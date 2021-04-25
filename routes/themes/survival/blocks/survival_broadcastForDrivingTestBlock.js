module.exports = (data) => {
	return {
		text: "Page 13",
		blocks: [
			{
			  type: "header",
			  text: "Page 13",
			  style: "blue",
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://dispatch.cdnser.be/wp-content/uploads/2017/04/20170419125834_z11.jpg"
			},
			{
			  type: "text",
			  text: "소마씨, 폰머슬씨는 지금 바로 2번 차량 앞으로 이동해주시기 바랍니다. 다시 한번 알립니다. 소마씨, 폰머슬씨는 ...\n\n폰머슬씨..? 저사람인가..? 우와 덩치봐.. 교통사고 당하는 것보다 저 사람한테 맞는 게 더 아플 것 같다... 앗 이러고 있을 때가 아니지. 얼른 시험장으로 이동하자.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "시험장으로",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_drivingTestOneBlock',
			  value: 'survival_drivingTestOneBlock',
			}
		],
	};
};