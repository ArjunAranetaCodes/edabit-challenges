function isTriangle(a, b, c) {
	return ((a + b + c) - Math.max(a, b, c)) > Math.max(a, b, c)
}