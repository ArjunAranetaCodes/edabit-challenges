function isSymmetrical(num) {
	return num.toString() === num.toString().split("").reverse().join("")
}