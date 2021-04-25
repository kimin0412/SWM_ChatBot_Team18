module.exports = (data) => {
	return {
		text: "Page 3",
		blocks: [
			{
			  type: "header",
			  text: "Page 3",
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
			  text: "*<문제 1>*\n 자동차에는 엑셀과 브레이크가 존재한다. 엑셀과 브레이크는 운전자를 기준으로 우측에 엑셀, 좌측에 브레이크가 존재한다.\n이 때, 대부분의 운전자들이 *엑셀과 브레이크를 밟는 발*은?\n\n1. 엑셀 : 왼발, 브레이크 : 오른발\n2. 엑셀 : 왼발, 브레이크 : 왼발\n3. 엑셀 : 오른발, 브레이크 : 왼발\n4. 엑셀 : 오른발, 브레이크 : 오른발",
			  markdown: true
			},
			{
			  type: "button",
			  text: "문제 풀기",
			  style: "primary",
			  action_type: 'call_modal',
			  action_name: 'survival_writtenTestOneModal',
			  value: 'survival_writtenTestOneModal', // request 영역
			}
		],
	};
};