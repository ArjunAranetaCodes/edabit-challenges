function checkFactors(factors, num) {
	return factors.every(x => !(num % x));
}