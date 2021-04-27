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
			  url: "https://i.ibb.co/0nDsqPq/quit-From-Shuttle-Three.png"
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