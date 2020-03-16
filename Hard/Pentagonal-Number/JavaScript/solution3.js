function pentagonal(num) { 
  if (num <= 1) return 1;
	num--;
	return num*5+pentagonal(num);
}