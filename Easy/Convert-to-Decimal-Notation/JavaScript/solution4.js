function convertToDecimal(perc) {
	return [...perc].map(p => p.replace("%","") / 100)
}