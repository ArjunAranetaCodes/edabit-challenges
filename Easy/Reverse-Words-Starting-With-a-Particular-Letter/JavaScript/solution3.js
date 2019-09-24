function specialReverse(s, c) {
	var a = s.split(/\s/);
	for (var i in a) {
		if (a[i].charAt(0) == c) {
			var b = a[i].split('');
			b = b.reverse();
			a[i] = b.join('');
		}
	}
	return a.join(' ');
}