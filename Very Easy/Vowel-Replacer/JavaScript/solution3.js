function replaceVowels(str, ch) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	
	const strArry = [...str].map((char) => {
		return vowels.includes(char) ? ch : char;
	});
	return strArry.join('');
}