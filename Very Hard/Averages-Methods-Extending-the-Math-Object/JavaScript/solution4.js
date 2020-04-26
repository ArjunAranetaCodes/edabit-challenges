Math.avg = function(arr, prec = 20) {
	return +(arr.reduce((a, c) => a + c, 0) / arr.length).toFixed(prec);
}

Math.qAvg = function(arr, prec = 20) {
	return +Math.sqrt(arr.reduce((a, c) => a + c*c, 0) / arr.length).toFixed(prec);
}

Math.hAvg = function(arr, prec = 20) {
	return +(1/arr.reduce((a, c) => a + 1/(c*arr.length), 0)).toFixed(prec);
}

Math.gAvg = function(arr, prec = 20) {
	return Math.nthRt(arr.reduce((a, c) => a * c, 1), arr.length, prec);
}

Math.nthRt = function(num, root, prec = 20) {
	return +Math.exp((1/root) * Math.log(num)).toFixed(prec);
}