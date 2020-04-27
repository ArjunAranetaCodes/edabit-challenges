function intWithinBounds(n, lower, upper) {
	return lower <= n && n < upper && Number.isSafeInteger(n);
}