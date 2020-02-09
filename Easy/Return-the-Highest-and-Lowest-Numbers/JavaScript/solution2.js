function toArray(num) {
	return [...num.toString()].map(s => Number(s))
}

function toNumber(arr) {
	return Number(arr.join(""))
}