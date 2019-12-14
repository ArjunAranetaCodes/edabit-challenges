function scoreCalculator(a, b, c) {
	return (a < 0 || b < 0 || c < 0) ? "invalid" : a*5 + b*10 + c*20;
}