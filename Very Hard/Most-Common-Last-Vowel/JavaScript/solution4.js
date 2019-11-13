function commonLastVowel(str) {
	let end_vowels = str.split(' ').map(w => w.replace(/.*([aeiou])[^aeiou]*$/gi,'$1'));
	const count = (chr) => [...end_vowels.join('').matchAll(new RegExp(chr,'gi'))].length;
	return ['a','e','i','o','u'].sort((c1,c2) => count(c2) - count(c1))[0];
}