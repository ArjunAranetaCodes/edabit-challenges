function operation(num1, num2) {
	let min = Math.min(num1, num2);
	let max = Math.max(num1, num2);
	return min + max === 24 ? "added" :
	(max - min === 24 ? "subtracted" :
	(max / min === 24 ? "divided" :
	(max * min === 24 ? "multiplied" : null)));
}