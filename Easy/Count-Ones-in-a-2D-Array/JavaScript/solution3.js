function countOnes(matrix) {
	return matrix.join("").split("").filter(x => x == "1").length;
}