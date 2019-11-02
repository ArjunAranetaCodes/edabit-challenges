function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(d => !['cola', 'fanta'].includes(d))
}