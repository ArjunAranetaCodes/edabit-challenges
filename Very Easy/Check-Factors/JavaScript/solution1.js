function checkFactors(factors, num) {
	return !factors.find(n => num % n)
}