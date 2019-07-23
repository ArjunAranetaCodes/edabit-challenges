function transformUpvotes(str) {
	var a = str.split(/\s+/);
	return a.map(function(el) {
		if (el.match(/([\d.]+)k$/)) {
			return RegExp.$1*1000;
		}
		return el|0;
	});
}