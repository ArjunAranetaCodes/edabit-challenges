function maximumScore(tileHand) {
	return tileHand.reduce((p,c) => p + c.score, 0);
}