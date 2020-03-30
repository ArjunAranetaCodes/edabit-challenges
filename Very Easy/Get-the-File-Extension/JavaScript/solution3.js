const firstAndLast = str => {
	const sorted = str.split('').sort();
	return [sorted.join(''), sorted.reverse().join('')];
}