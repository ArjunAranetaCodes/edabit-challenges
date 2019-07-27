function primalStrength(n) {
	let res=["Balanced", "Strong", "Weak"]
	const isPrime = n => {				
		for (let i = 2; i < n; i++) {
			if (n % i == 0) return 0;}
			return n >= 2;}
	for(let i=1;i<=n;i++){
		if(isPrime(n+i) && isPrime(n-i)) return res[0]
		if(isPrime(n+i)) return res[1]
		if(isPrime(n-i)) return res[2]
	}
}