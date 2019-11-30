function powerRanger(power, min, max) {
	return Math.floor(Math.pow(max,(1/power)) - Math.pow(min,(1/power))+1) ;
}