function hasIdentical(arr) {
	const row = r => JSON.stringify(arr[r]);
	const col = c => JSON.stringify(arr.map(r => r[c]));
	for (let r in arr) {
		for (let c in arr) {
			if (row(r) === col(c)) { return true; }
		}
	}
	return false;
}