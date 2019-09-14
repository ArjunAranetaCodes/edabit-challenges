function factorial(z) {
	if (z < 0) {return;}
	if (z === 0) {return 1;}
	return z * factorial(z-1);
	}