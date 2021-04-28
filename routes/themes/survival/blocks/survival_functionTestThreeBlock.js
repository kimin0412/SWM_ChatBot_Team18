module.exports = (data) => {
	return {
		text: "Page 11",
		blocks: [
			{
			  type: "header",
			  text: "Page 11",
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
			  text: "*<문제 3>*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n\n 기능시험 단골손님인 돌발상황이다!! 어떻게 해야 할까? \n\n1. 급정거 후 뒷목을 잡으며 내린다.\n2. 비상등을 켜고 엑셀을 밟아 빠르게 지나간다.\n3. 고개를 앞으로 숙여 클락션을 꾹 누른 채로 기절한다.\n4. 빠르게 브레이크를 밟아 멈춘 후, 비상등을 켠다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_functionTestThreeModal',
			  value: 'survival_functionTestThreeModal',
			}
		],
	};
};