function stackBoxes(n) {
	var stack = 0;
	for(let i = 0; i < n; i++){
		stack = stack + 2 * i + 1
	};
	return stack
}