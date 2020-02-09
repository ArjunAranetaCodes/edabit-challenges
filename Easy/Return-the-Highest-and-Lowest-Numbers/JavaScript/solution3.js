function toArray(num) {
	return String(num).split("").map(Number);
}

function toNumber(arr) {
	return parseInt(arr.join(""))
}