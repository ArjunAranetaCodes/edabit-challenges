function distanceToNearestVowel(str) {
	let vowels = [...str].map((v,i) => /[aeiou]/.test(v) ? i : -1).filter(v => v >= 0);
	return [...str].map((_,i) => Math.min(...vowels.map(v => Math.abs(i - v))));
}