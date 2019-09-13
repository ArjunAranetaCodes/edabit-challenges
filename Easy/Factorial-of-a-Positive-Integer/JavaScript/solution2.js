function factorial(z) {
	var count = z
	var fact = 1
	while(count > 0){
		fact = fact * count
		count--
	}
	return fact
}