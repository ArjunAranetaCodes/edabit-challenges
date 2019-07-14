function afterNYears(names, n) {
	for (var k in names) {
		names[k] += Math.abs(n);
	}
	
	return names;
}