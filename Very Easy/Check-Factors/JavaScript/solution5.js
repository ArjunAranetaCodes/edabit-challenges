function checkFactors(factors, num) {
	for (let i = 0; i < factors.length; i++) {
		if (num % factors[i] !== 0) {
			return false;
		}
	}
	return true;
}