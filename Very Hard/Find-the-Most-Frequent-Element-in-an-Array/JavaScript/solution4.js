function findFrequent(arr) {
	let arr1 = [...arr].sort();
	let arr2 = arr1.map(x => arr1.lastIndexOf(x) - arr1.indexOf(x) + 1);
	return arr1[arr2.indexOf(Math.max(...arr2))];
}