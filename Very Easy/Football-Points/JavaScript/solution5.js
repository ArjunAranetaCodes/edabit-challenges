function limitNumber(num, rangeLow, rangeHigh) {
	var newArr = Array.from(arguments)
	newArr.sort(function(a, b){return a-b});
	return newArr[1]
}