function distanceToNearestVowel(str) {
	return str.split("").map(function(e, i){ return distanceToVowel(str, i); });
}

function distanceToVowel(str, index) {
	for (let i = 0; i < str.length; i++) {
		let min = index - i;
		let max = index + i;
		if (min >= 0 && /[aeiou]/.test(str.charAt(min))) return i;
		if (max < str.length && /[aeiou]/.test(str.charAt(max))) return i;
	}
	
	return "ERROR: VOWEL NOT FOUND";
}