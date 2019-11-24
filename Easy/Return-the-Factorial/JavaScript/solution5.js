function factorial(int) {
	if (int === 0) {
  	return 1;
	}
  return int * factorial(int-1);
}