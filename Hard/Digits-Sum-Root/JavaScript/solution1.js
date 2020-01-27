const rootDigit = n => (
	n > 9 ? rootDigit([...`${n}`].reduce((a,b) => a + +b, 0)) : n
);