function scoreCalculator(easy, med, hard) {
	return [...arguments].every(x=> x>=0) ? easy * 5 + med * 10 + hard * 20 : 'invalid'
}