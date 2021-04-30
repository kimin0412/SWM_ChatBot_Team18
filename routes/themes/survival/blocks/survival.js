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
			  text: " *<죽음의 운전면허 교육에 오신 것을 환영합니다.>*\n\n본 교육은 필기, 기능, 도로주행 세 가지의 시험을 통과하시면 됩니다.\n\n버튼을 누르시면 시작합니다.",
			  markdown: true
			},
			{
                type: 'button',
                text: '시작하기 🚕',
                style: 'primary',
                action_type: 'submit_action',
                action_name: 'survival_enterWrittenTestBlock',
                value: 'survival_enterWrittenTestBlock',
            },
            {
                type: 'button',
                text: '랭킹 확인 🏆',
                style: 'default',
                action_type: 'submit_action',
                action_name: 'survival_hallOfFameBlock',
                value: 'survival_hallOfFameBlock',
            },
  		],
	};
};