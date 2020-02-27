function maximumScore(tileHand) {
	var sum = 0
	for(var x = 0; x < tileHand.length; x++){
		var obj = tileHand[x]
		sum = sum + obj.score
	}
	return sum
}