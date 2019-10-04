function howBad(num) {
	function isPrime(x) {
		if (x < 2) { return false; }
		for (let i = 2; i <= Math.sqrt(x); i++) {
			if (!(x % i)) { return false; }
		}
		return true;
	}
	let p = num.toString(2).replace(/0/g,'').length;
	return [p % 2 ? "Odious" : "Evil", "Pernicious"].slice(0, 1 + isPrime(p));
}