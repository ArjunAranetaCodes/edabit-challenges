function getSumOfItems(arr) {
	let sum = arr.reduce((acc, curVal) => {
		return acc + curVal;
	}, 0);
	return sum;
}