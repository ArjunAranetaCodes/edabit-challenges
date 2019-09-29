const smallest = length => {
	let res = {};
	let arr = Array.from({length}, (_, i) => getFactors(i + 1));
	arr.flat().forEach(sub => {
		if (!res.hasOwnProperty(sub[0]) || res[sub[0]] < sub[1])
			res[sub[0]] = BigInt(sub[1]);
	});
	return Object.entries(res)
		.map(v => BigInt(v[0]) ** v[1]).reduce((a,b) => a * b, 1n);
}

const getFactors = (n, arr = [], fct = 2) => {
	while (n > 1) {
		if (n % fct === 0) {
			let pwr = 0;
			while (n % fct === 0) { n /= fct; pwr++ }
			arr.push([fct, pwr]);
		} fct++;
	}
	return arr;
}