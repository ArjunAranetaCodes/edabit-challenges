function lcm(n1, n2, num) {
	num = num ? num : n2;
	if(num % n1 == 0 && num % n2 == 0) return num;
	return lcm(n1,n2,num+1);
}