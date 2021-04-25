module.exports = (data) => {
	return {
		text: "Page 22",
		blocks: [
			{
			  type: "header",
			  text: "Page 22",
			  style: "red"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://vfan-phinf.pstatic.net/a/32he9e/5_dcfUd018svckya4sqrjg19t_vhkudt.jpg?type=w1000"
			},
			{
			  type: "text",
			  text: "큰일났다..\n한 명.. 한 명.. 같이 웃던 사람들이 셔틀에서 내린다..\n간절하게 기도했다..\n폰머슬씨와 나만 남지 않기를...\n\n하지만 신은 가혹했다.\n남은 사람은 나와 폰머슬씨, 그리고 기사님뿐이다.",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "danger",
			  action_type: 'submit_action',
			  action_name: 'survival_quitFromShuttleOneBlock',
			  value: 'survival_quitFromShuttleOneBlock',
			}
		],
	};
};