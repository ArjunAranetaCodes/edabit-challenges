const amplify = (num) => {
	let result = [];
	for (let i = 1; i <= num; i++) {
		result.push(i);
	}
	return result.map(x => x % 4 == 0 ? x*10 : x);
}