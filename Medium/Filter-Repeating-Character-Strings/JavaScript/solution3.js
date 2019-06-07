function identicalFilter(arr) {
	return arr.filter(word => {
		let keep = true;
		for (let i = 1; i < word.length; i++) {
			if (word[i] !== word[0]) {
				keep = false;
			}
		}
		return keep;
	})
}