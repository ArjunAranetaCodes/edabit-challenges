function maximumScore(tileHand) {
	return tileHand.reduce((c,v) => c += v.score, 0)
}