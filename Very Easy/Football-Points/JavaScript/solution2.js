function limitNumber(num, rangeLow, rangeHigh) {
	return [...arguments].sort((a, b) => a - b)[1]
}