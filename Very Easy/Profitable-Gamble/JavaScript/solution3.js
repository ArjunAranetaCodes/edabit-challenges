function profitableGamble(prob, prize, pay) {
	return prob * prize - pay > 0 ? true : false
}