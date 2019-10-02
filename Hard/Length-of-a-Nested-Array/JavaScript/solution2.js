function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}