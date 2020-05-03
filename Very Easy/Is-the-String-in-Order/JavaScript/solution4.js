function isInOrder(str) {
	return str === str.split("").sort().join("");
}