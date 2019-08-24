function helloWorld(num) {
	if (num % 5 === 0) {
		if (num % 3 === 0) {
			return 'Hello World';
		}
		return 'World'
	} else if (num % 3 === 0) {
		return 'Hello';
	} 
}