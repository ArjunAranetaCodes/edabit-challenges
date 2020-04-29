function isIdentical(s) {
	return new Set([...s]).size === 1;
}