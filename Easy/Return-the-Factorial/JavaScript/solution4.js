function factorial(int) {
	if(int===1) {
		return int;
	} else {
		return int * factorial(int-1);
	}
}