function getDecimalPlaces(num) {
	return num.slice(num.indexOf(".")).length - 1;
}