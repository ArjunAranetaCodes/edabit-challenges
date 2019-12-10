const sumMissingNumbers = a => {
	let tot = 0;
	for (let i = Math.min(...a) + 1, j = Math.max(...a); i < j; i++)
		if (!a.includes(i)) tot += i;
	return tot;
}