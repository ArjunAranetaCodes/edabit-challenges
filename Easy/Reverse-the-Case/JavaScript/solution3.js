function reverseCase(str) {
	let newString = '';
	for (let i = 0; i < str.length; i++) {
		let letter = str.charAt(i);
		if (letter == letter.toUpperCase()) {
            letter = letter.toLowerCase();
        } else {
            letter = letter.toUpperCase();
        }
		newString += letter;
	}
	return newString;
}