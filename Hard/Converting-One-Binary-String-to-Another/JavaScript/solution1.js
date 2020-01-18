function minSwaps(s1, s2) {
	return s1 .split('').filter((char,i) => char !=s2[i]).length/2;
}