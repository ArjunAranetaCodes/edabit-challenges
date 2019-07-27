function primalStrength(n) {
	return isStrongPrime(n)
}

function isStrongPrime(n) { 
		if (!isPrime(n) || n == 2) 
				return false; 

		var previous_prime = n - 1; 
		var next_prime = n + 1; 

		while (!isPrime(next_prime)) 
				next_prime++; 

		while (!isPrime(previous_prime)) 
				previous_prime--; 
	
		var mean = (previous_prime + next_prime) / 2; 
	
	  if(Math.abs(next_prime - n) === Math.abs(previous_prime - n)){
			return "Balanced"
		}

		if (n > mean) 
			return "Strong"
		else
			return "Weak"
} 

function isPrime(n) 
{ 
		if (n <= 1) 
				return false; 
		if (n <= 3) 
				return true; 

		if (n % 2 == 0 || n % 3 == 0) 
				return false; 

		for (var i = 5; i * i <= n; i = i + 6) 
				if (n % i == 0 || n % (i + 2) == 0) 
						return false; 

		return true; 
}