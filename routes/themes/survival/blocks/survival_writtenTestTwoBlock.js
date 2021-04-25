module.exports = (data) => {
	return {
		text: "Page 4",
		blocks: [
			{
			  type: "header",
			  text: "Page 4",
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
			  text: "*<문제 2>*\n 자동차에는 P(Parking), R(Reverse), N(Neutral), D(Drive)의 4가지 기어가 존재한다. 기어가 올바르게 설정되어 있지 않으면 아무리 엑셀을 밟아도 차체가 움직이지 않는다. 또한 엑셀을 밟지 않아도 차체가 앞이나 뒤로 천천히 움직일 수 있다.\n 다음 중, *엑셀을 밟아도 움직이지 않는 기어끼리* 짝지어진 것은?\n\n1. P, D\n2. R, N\n3. P, N\n4. R, D",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_writtenTestTwoModal',
			  value: 'survival_writtenTestTwoModal', // request 영역
			}
		],
	};
};