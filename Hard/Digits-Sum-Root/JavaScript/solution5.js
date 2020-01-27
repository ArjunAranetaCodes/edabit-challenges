function minSwaps(s1, s2) {
	var c = 0;
	for (var i = 0; i < s1.length; i++) {
		if (s1.charAt(i) != s2.charAt(i))
			c++;
	}
	return c / 2;
}