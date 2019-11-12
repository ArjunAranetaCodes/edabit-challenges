function commonLastVowel(str) {
	let vowels = {a: 0, e: 0, i: 0, o: 0, u: 0};
	for (let word of str.toLowerCase().split(" ")) {
		const last = (word.match(/[aeiou]/g) || []).slice(-1)[0];
		if (last) vowels[last]++;
	}
	const max = Math.max(...Object.values(vowels));
	for (let v in vowels) if (vowels[v] === max) return v;
}