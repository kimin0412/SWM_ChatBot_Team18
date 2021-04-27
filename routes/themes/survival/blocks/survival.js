module.exports = (data) => {	
 	return{
  		text: "Page 1",
  		blocks: [
			{
			  type: "header",
			  text: "Page 1", // 메시지가 보내지는 순서, 단순 페이지 번호
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/h2qWHDf/survival.jpg",
			},
			{
			  type: "text",
			  text: " *<운전면허 교육에 어서오세요.>*\n\n본 과정은 필기, 기능, 도로주행 세 가지로 구분되며 적당한 난이도의 시험이 있습니다. 버튼을 누르시면 시작합니다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "시작하기",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_enterWrittenTestBlock',
			  value: 'survival_enterWrittenTestBlock',    
			}
  		],
	};
};