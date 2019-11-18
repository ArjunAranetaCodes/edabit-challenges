const isSymmetrical = num => {
	const str = String(num);
	return str.split('').reverse().join('') === str;
}