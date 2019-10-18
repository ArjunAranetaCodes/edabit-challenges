function getBudgets(arr) {
	return arr.reduce((c,i) => c + i.budget, 0)
}