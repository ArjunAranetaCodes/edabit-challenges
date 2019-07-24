function triangle(n) {
	var totalDots = 0;
	for(var x = 1; x <= n; x++){
		totalDots += x;
	}
	return totalDots;
}