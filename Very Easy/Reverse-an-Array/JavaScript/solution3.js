function reverse(arr) {
	let word = [];
	for(letter of arr){
		word.unshift(letter)
	}
	return word
}