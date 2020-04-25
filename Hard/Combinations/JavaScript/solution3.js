function combinations(items) {
	let args = Array.prototype.slice.call(arguments);
	return args.filter(x => x > 0).reduce((a, b) => a * b, 1);
}