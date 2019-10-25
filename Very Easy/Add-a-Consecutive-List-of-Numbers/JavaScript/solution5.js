function addUpTo(n) {
	var count = 0
	var sum = 0
	while(n > 0){
		sum = sum + n
		n--
	}
	return sum
}