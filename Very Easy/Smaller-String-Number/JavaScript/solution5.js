function last(a, n) {
	if (a.length >= n) {
		let arr = [];
		for (let i = n; i > 0; i--) {
			arr.push(a[a.length - i]);
		}
		return arr;
	}
	else {
		return "invalid"
	}
}