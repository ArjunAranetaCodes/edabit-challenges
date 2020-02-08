function toArray(num) {
	return num.toString().split("").map(x=>x=Number(x));
}

function toNumber(arr) {
	return Number(arr.join(""));
}