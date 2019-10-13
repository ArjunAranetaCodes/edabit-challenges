function toArray(obj) {
	return Object.keys(obj).map(x => [x, obj[x]]);
}