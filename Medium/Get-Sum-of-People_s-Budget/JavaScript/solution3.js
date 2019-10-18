function getBudgets(arr) {
	return arr.reduce((sum, x) => sum + x.budget, 0);
}