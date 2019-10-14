function objectToArray(obj) {
	let s = JSON.stringify(obj).replace(/({\"|,\")/g, ',["').replace(/(,|})/g, '],').replace(/:/g, ',');
	return JSON.parse('['+s.substr(2, s.length-3)+']');
}