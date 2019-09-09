function stackBoxes(n) {
	if (n == 0) return 0;
  return stackBoxes(n-1)+2*n-1;	
}