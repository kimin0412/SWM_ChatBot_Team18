module.exports = (data) => {
	const { message, actions, action_time, value, action_name } = data;
	let [thema, context, ord] = value.split('_');
	let order = parseInt(ord);
	const questionPath = './question/' + [
		'intro',
		'question1',
		'question2',
		'question3',
		'question4',
		'question5',
		'question6',
		'question7',
		'question8',
		'outtro',
	][order];
	if (questionPath.includes("tro")) 
		return require(questionPath)();
	
	const question = require(questionPath)(order);
	question.blocks.push({
		type: 'action',
		elements: [
			{
				type: 'button',
				text: '정답',
				style: 'primary',
				action_type: 'call_modal',
				value: `fantasy_answer_${order}`,
			},
			{
				type: 'button',
				text: '힌트',
				style: 'danger',
				action_type: 'submit_action',
				action_name: 'fantasy_hint',
				value: `fantasy_hint_${order}`,
			},
		],
	});
	return question;
};