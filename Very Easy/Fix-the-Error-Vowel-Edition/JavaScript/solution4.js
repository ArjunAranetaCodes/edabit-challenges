function calcDeterminant(matrix) {
	const [[a, b], [c, d]] = matrix
	return a * d - b * c
}