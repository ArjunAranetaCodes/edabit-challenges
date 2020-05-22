function convertToDecimal(perc) {
	return perc.map(percentage => parseFloat(percentage) / 100);
}