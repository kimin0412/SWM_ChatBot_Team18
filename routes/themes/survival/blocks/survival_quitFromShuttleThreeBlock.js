module.exports = (data) => {
	return {
		text: "Page 25",
		blocks: [
			{
			  type: "header",
			  text: "Page 25",
			  style: "red",
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://mblogthumb-phinf.pstatic.net/20160705_214/joanishappy_146771917713536YBw_PNG/c0000575_4c2f7b218294c.png?type=w800"
			},
			{
			  type: "text",
			  text: "*그리고 나는...*",
			  markdown: true
			},
			{
			  type: "button",
			  text: "다음으로",
			  style: "danger",
			  action_type: 'submit_action',
			  action_name: 'survival_quitFromShuttleFourBlock',
			  value: 'survival_quitFromShuttleFourBlock',
			}
		],
	};
};