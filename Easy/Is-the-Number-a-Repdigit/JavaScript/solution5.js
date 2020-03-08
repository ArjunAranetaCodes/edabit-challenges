function isRepdigit(num) {
	num += "";
	for (i = 0; i < num.length; i++) {
			if (num[i] != num[0]) {
					return false;
			}
	}
	return true;
}