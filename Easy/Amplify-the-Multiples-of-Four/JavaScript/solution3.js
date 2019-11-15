function amplify(num) {
	return Array(num).fill(1)
		.map((v,i) => v + i)
		.map(v => v % 4 == 0 ? v * 10 : v)
}