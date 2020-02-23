function leftDigit(num) {
	var filtered = parseInt(num.split("").filter(elem => !isNaN(elem)).shift());
	
	return filtered;
}