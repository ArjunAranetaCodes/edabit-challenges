function powerRanger(power, min, max) {
	var c = 0;
	for (var i = 1; ; i++) {
		var n = Math.pow(i, power);
		if (n > max) break;
		if (n >= min) c++;
	}
	return c;
}