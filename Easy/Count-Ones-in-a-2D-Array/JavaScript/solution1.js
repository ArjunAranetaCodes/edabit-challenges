function countOnes(matrix) {
	return matrix.toString().split(',').filter(x => x == '1').length
}