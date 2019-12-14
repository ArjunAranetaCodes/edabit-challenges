const scoreCalculator = (easy, med, hard) => 
	[easy, med, hard].every(input => input >= 0)? 
			(easy * 5) + (med * 10) + (hard * 20)
		: 'invalid';