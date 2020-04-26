Math.avg = function(arr, prec) {
	return prec ?
		+arr.reduce((a,v) => a + v / arr.length, 0).toFixed(prec)
		: arr.reduce((a,v) => a + v / arr.length, 0);
}

Math.qAvg = function(arr, prec) {
	return prec ?
		+Math.sqrt(Math.avg(arr.map(v => Math.pow(v, 2)))).toFixed(prec)
		: Math.sqrt(Math.avg(arr.map(v => Math.pow(v, 2))));
}

Math.hAvg = function(arr, prec) {
	return prec ?
		+Math.pow(Math.avg(arr.map(v => Math.pow(v, -1))), -1).toFixed(prec)
		: Math.pow(Math.avg(arr.map(v => Math.pow(v, -1))), -1);
}

Math.gAvg = function(arr, prec) {
	return prec ?
		+Math.nthRt(arr.reduce((a,v) => a * v), arr.length).toFixed(prec)
		: Math.nthRt(arr.reduce((a,v) => a * v), arr.length);
}

Math.nthRt = function(num, root, prec) {
    return prec ?
			+this.exp((1 / root) * this.log(num)).toFixed(prec)
			: this.exp((1 / root) * this.log(num));
}