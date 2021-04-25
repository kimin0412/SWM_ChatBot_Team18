module.exports = (data) => {
	return {
		text: "Page 8",
		blocks: [
			{
			  type: "header",
			  text: "Page 8",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/653/0c1e92110f11b7f16b2395752c1f6e45.jpeg"
			},
			{
			  type: "text",
			  text: "차에 타니까 갑자기 무척 떨리네..\n아니야!! 연습할 때는 잘 했잖아.. 잘 할 수 있을거야!",
			  markdown: true
			},
			{
			  type: "button",
			  text: "기능시험 시작",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_functionTestOneBlock',
			  value: 'survival_functionTestOneBlock',
			}
		],
	};
};