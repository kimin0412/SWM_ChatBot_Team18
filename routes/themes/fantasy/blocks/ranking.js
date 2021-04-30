module.exports = async (data) => {
	const { message, actions, action_time, value, action_name, react_user_id } = data;
	let [thema, context, ord] = value.split('_');
	console.log(ord);
	switch (ord) {
		case 'hof':
			return await require('./rank/hallOfFame')(data);
			break;
		case 'user':
			return await require('./rank/userRank')(data);
			break;
		default:
			break;
	}
};