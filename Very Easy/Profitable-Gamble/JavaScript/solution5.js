function profitableGamble(prob, prize, pay) {
	let figure = (prob*prize)-pay;
	return (figure > 0)?true:false;
}