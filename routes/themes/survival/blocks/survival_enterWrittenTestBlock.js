module.exports = (data) => {
	return {
		text: "Page 2",
		blocks:[
			{
			  type: "header",
			  text: "Page 2",
			  style: "blue"
			},
			{
			  type: "divider"
			},
			{
			  type: "image_link",
			  url: "https://i.ibb.co/tcq8szz/survival-enter-Written-Test-Block.jpg"
			},
			{
			  type: "text",
			  text: " 드디어 나도 운전면허를 딸 수 있는 나이가 되었다!! 빨리 운전면허를 따서 자기랑 재밌게 놀러다녀야지!\n\n첫 번째 시험은 *필기시험*이라는데.. 다들 쉽다고 그랬으니 걱정할 필요 없겠지..?",
			  markdown: true
			},
			{
			  type: "button",
			  text: "필기 시험장 입장",
			  style: "primary",
			  action_type: 'submit_action',
			  action_name: 'survival_writtenTestOneBlock',
			  value: 'survival_writtenTestOneBlock',
			}
		],
	};
};