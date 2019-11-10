function balanced(word) {
	const f_half = word.slice(0, word.length / 2);
	const s_half = word.slice(-f_half.length);
	return toASCII_Sum(f_half) === toASCII_Sum(s_half);
}
const toASCII_Sum = (str) => str.split('').reduce((acc, cv, i) => acc += str.charCodeAt(i), 0);