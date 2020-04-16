function convertCartesian(x, y) {
	return x.map((v, i) => [v, y[i]])
}