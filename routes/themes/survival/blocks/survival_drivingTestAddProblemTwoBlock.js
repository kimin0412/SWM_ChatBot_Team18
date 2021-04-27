module.exports = (data) => {
	return {
		text: "Page 19",
		blocks: [
			{
			  type: "header",
			  text: "Page 19",
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
			  text: "*<문제 3>*\n 앗! 이전에 폰머슬씨의 질주로 인해 주행 중 연료가 부족하게 되었다. 당황한 감독관은 이것도 경험이라는 듯 근처 주유소에서 직접 주유를 해보라며 이 차는 *가솔린차*라고 알려주었다. 어떤 기름을 주유하여야 할까?\n\n1. 휘발유\n2. 경유\n3. LPG 가스\n4. 참이슬\n",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_drivingTestAddProblemTwoModal',
			  value: 'survival_drivingTestAddProblemTwoModal',
			}
		],
	};
};