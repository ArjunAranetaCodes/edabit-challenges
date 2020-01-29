function happy(n) {
	if (n == 1) return true;
	if (n == 4) return false;
	return happy([...n.toString()]
		.reduce((sum, v) => Math.pow(Number(v), 2) + sum, 0))
}