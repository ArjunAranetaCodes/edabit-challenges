const maxTotal = numbers => {
	return numbers
		.sort((a,z) => z - a).slice(0, 5).reduce((a,b) => a + b, 0);
}