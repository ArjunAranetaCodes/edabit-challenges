function powerRanger(power, min, max) {
	var intCount = 0
	for(var x = min; x <= max; x++){
		if(Number.isInteger(Math.pow(x, 1/power))){
			intCount++
		}
	}
	return intCount
}