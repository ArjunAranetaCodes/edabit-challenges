function abcmath(a, b, c) {
	var sum = 0
	sum= a
	while(b > 0){
		sum = sum + sum
		b--
	}
	return sum % c === 0
}