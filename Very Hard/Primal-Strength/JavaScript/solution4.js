function primalStrength(n) {
	const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
	
	let greater =n+1
	while(!isPrime(greater)){
		greater++
	}
	let smaller = n-1
	while(!isPrime(smaller)){
		smaller--
	}
	return (n-smaller === greater-n)? 'Balanced':(n-smaller < greater-n)?'Weak':'Strong'
}