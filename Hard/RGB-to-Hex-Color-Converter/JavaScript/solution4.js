const pentagonal = num => {
	if (num === 1) return 1;
	
	return 5 * (num - 1) + pentagonal(num - 1);
}