function countOnes(matrix) {
	return matrix.reduce((a, arr) => a + arr.reduce((_a, n) => _a += n === 1 ? 1: 0, 0), 0);
}