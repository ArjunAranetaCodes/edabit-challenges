function squaresSum(n) {
	var sum = 0;
	for(var x = 1; x <= n; x++){
		sum = sum + Math.pow(x, 2)
	}
	return sum
}