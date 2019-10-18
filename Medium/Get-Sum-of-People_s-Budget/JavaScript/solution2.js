function getBudgets(arr) {
	const budgets = arr.reduce((total, person) => total + person.budget, 0);
	return budgets;
}