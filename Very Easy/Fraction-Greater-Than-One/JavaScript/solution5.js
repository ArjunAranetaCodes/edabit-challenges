function greaterThanOne(frac) {
	let newFracArray = frac.split("/").map(x => Number(x));
	return newFracArray[0] / newFracArray[1] > 1;
}