function isPrime(n) {
	if (n < 2) { return false; }
	for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
	return true;
}

function nextPrime(n) {
	let i = n+1;
	while (!isPrime(i)) i++;
	return i;
}

function prevPrime(n) {
	let i = n-1;
	while (!isPrime(i)) i--;
	return i;
}

const primalStrength = n => ['Weak','Balanced','Strong'][Math.sign(n - (nextPrime(n) + prevPrime(n)) / 2) + 1];