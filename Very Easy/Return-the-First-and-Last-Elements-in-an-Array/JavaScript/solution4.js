function firstLast(arr) {
	let first = arr.shift();
	let last = arr.pop();
	return [first, last];
}