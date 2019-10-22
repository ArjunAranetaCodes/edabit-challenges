const oneOddOneEven = n =>
	([...n+''].filter(e => e%2 == 0).length === 1)