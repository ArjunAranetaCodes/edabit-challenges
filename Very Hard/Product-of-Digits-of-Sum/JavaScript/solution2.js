function sumDigProd(...arr) {
	var val = arr.reduce((s,v) => s+v, 0);
	while(val > 10)
		val = val.toString().split("").reduce((s,v) => s*v, 1);
	return val;
}