const range = (start, end) => Array.from({length: end - start + 1}, (_, i) => BigInt(start + i))

const gcd = (a, b) => b === 0n ? a : gcd(b, a % b)

function smallest(n) {
	return range(2, n)
		.reduce((acc, el) => acc * ( el / gcd(el, acc) ), BigInt(1))
}