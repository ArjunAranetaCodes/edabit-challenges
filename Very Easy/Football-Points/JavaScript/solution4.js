function limitNumber(num, rangeLow, rangeHigh) {
	if(num < rangeLow) return rangeLow;
	if(num > rangeHigh) return rangeHigh;
	return num;
}