function middleEarth(arr) {
	let sam = arr.indexOf('Sam');
	let frodo = arr.indexOf('Frodo');
	return frodo - sam === 1 || sam - frodo === 1;
}