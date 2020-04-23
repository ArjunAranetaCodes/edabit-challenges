function filterStateNames(arr, type) {
	return arr.filter(el => (type === 'abb') ? el.length === 2 : el.length > 2);
}