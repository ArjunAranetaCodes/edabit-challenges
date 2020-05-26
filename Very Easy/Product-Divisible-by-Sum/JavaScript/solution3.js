function divisible(arr) {
	let total = arr.reduce((a,b) => {
		return a*b;
	})
	
	let total2 = arr.reduce((a,b) => {
		return a+b;
	})
	
	if(total % total2 === 0) return true;
	return false;
}