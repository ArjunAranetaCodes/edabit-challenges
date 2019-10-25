function addUpTo(n) {
	return n == 0 ? 0 : n + addUpTo(n-1);
}