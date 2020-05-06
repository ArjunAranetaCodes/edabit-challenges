function last(a, n) {
	if(n>a.length){
		return "invalid";
	}
	return a.slice(a.length-n);
}