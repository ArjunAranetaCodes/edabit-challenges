function factorial(z) {
	return z ? (z * factorial(z - 1)) : 1
}