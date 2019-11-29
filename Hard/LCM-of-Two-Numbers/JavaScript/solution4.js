function lcm(n1, n2) {
	var smaller = Math.min(n1,n2);
	var larger = Math.max(n1,n2);
	
	var res = larger;
	while (res % smaller !== 0) {
		res += larger;
	}
	
	return res;
}