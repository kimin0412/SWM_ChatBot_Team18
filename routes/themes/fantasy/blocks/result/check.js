module.exports = (order, answer) => {
	sols = [
		"anam",
		"ghost",
		"soma",
		"meteor",
		"airpods"
	]
	return answer === sols[order - 1];
}