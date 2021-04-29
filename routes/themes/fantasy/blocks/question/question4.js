module.exports = (order) => {
	return {
		text: 'Question',
		blocks: [
			{
				type: 'header',
				text: `${order}층 : Races`,
				style: 'blue',
			},
			{
				type: 'text',
				text:
					' *_드래곤에겐 있지만, 마법사에겐 없는것..._* \n\n *_오크와 고블린이 함께 가지고 있는것..._* \n\n *_너에겐 있고, 나에겐 없는것은?_* ',
				markdown: true,
			},
		],
	};
};