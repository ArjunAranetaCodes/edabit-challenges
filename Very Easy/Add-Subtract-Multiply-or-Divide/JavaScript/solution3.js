const operation = (x, y) =>
	x + y == 24 ? "added" :
	x - y == 24 ? "subtracted" :
	x * y == 24 ? "multiplied" :
	x / y == 24 ? "divided" : null;