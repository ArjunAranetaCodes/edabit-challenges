function isSastry(number) {
	return !(`${Math.sqrt(`${number}${number+1}`)}`.match(/\./)||[]).length
}