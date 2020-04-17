function convertCartesian(x, y) {
	return x.map(function(element, idx) {
	
		return [element, y[idx] ]
	});
}