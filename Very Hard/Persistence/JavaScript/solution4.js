function additivePersistence(n) {
	var c = 0;
	while (n > 9) {
		var a = (''+n).split('');
		n = 0;
		for (var i in a) {
			n += a[i] | 0;
		}
		c++;
	}
	return c;
}

function multiplicativePersistence(n) {
	var c = 0;
	while (n > 9) {
		var a = (''+n).split('');
		n = 1;
		for (var i in a) {
			n *= a[i] | 0;
		}
		c++;
	}
	return c;	
}