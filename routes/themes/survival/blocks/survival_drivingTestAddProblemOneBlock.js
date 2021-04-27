module.exports = (data) => {
	return {
		text: "Page 18",
		blocks: [
			{
			  type: "header",
			  text: "Page 18",
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
			  text: "*<문제 2>*\n 앗! 실수로 뒤의 차를 확인하지 못하고 차선을 변경해버렸다. 뒤 차는 고맙게도 속도를 줄여주었다. 뒤 차에게 *미안함과 고마움을 표현*하고 싶어졌다. 어떻게 해야할까?\n\n1. 창문을 열고 엄지손가락을 세운다.\n2. 비상등을 잠시 켰다가 끈다.*\n3. 차에서 내린 후, 고맙다고 인사하러 간다.\n4. 급브레이크를 밟아 놀래켜준다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_drivingTestAddProblemOneModal',
			  value: 'survival_drivingTestAddProblemOneModal',
			}
		],
	};
};