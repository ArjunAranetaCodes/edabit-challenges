function abcmath(a, b, c) {
	for (let i = 0; i <= b; i++) {
		a = a + a;
	}
	return a % c === 0;
}