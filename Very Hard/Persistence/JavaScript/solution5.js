function additivePersistence(n) {
	let ret = 0
	let num = n
	while ([...String(num)].length > 1) {
		num = [...String(num)].reduce((a, c) => a + Number(c), 0)
		ret++
	}
	return ret
}

function multiplicativePersistence(n) {
	let ret = 0
	let num = n
	while ([...String(num)].length > 1) {
		num = [...String(num)].reduce((a, c) => a * Number(c), 1)
		ret++
	}
	return ret
}