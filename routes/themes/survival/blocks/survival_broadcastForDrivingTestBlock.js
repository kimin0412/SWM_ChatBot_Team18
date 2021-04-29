const libDatabase = require('../../../../libs/database/').service

module.exports = async (data) => {
	const {react_user_id} = data;
	const user = await libDatabase.findUser(react_user_id);
	const userName = user.userName;
	
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
			  url: "https://i.ibb.co/XbMGjcK/survival-broadcast-For-Driving-Test-Block.jpg"
			},
			{
			  type: "text",
			  text: `${userName}씨, 폰머슬씨는 지금 바로 2번 차량 앞으로 이동해주시기 바랍니다. 다시 한번 알립니다. ${userName}씨, 폰머슬씨는 ...\n\n폰머슬씨..? 저사람인가..? 우와 덩치봐.. 교통사고 당하는 것보다 저 사람한테 맞는 게 더 아플 것 같다... 앗 이러고 있을 때가 아니지. 얼른 시험장으로 이동하자.`,
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