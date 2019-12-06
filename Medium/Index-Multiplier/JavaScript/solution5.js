function indexMultiplier(arr) {
	return arr.reduce((ac,v, i) => ac+ v * i, 0)
}