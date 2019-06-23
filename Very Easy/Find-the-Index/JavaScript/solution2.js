function findIndex(lst, str) {
	for (let i = 0; i < lst.length; i++) {
		if (lst[i] === str) {
			return i;
		}
	}
}