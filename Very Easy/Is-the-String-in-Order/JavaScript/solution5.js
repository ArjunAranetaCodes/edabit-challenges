function isInOrder(str) {
	return [...str].sort().join('') === str
}