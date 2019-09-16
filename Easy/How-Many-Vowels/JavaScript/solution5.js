let countVowels = str =>
	[...str].filter(c => /[aeiou]/i.test(c)).length