function censor(str) {
	var arr = str.split(" ");
	var res = arr.map(x => x.length < 5 ?  x : "*".repeat(x.length));
	return res.join(" ");
}