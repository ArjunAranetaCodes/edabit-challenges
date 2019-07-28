function sumDigProd(...args) {
	let n = args.reduce((a,v) => a + v, 0);
	while (n > 9) { n = [...''+n].reduce((a,v) => a * +v, 1); }
	return n;
}