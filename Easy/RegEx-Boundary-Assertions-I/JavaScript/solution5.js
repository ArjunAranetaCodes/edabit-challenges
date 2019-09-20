function isJS(path) {
	var regex = path.match(/(.*)\.jsx?/);
	return regex!==null
}