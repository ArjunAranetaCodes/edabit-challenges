function convertCartesian(x, y) {
	let coords = [];
	for (let i=0; i < x.length; i++) {
		let coord = [];
		coord.push(x[i], y[i])
		coords.push(coord);
	}
	return coords;
}