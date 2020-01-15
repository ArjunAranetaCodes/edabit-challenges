function countOnes(i) {
  i = i.toString(2);
	return i.split('1').length-1;
}