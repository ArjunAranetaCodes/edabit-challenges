function smallest(n) {
	const gcf = (a, b) => b ? gcf(b, a % b) : a;
	return [...Array(n).keys()].map(e => BigInt(e + 1)).reduce((a, b) => (a * b) / gcf(a, b));
}