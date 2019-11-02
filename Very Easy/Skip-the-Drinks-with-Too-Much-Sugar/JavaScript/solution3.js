function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(x => !/fanta|cola/.test(x))
}