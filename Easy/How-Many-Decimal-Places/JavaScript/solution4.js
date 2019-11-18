function getDecimalPlaces(num) {
	let [integer,decimals] =  num.split(".");
	return decimals ? decimals.length : 0;
}