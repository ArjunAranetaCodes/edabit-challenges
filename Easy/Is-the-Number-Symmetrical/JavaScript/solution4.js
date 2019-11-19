function isSymmetrical(num) {
	return num.toString().split("").reverse().join("") === num.toString();
}