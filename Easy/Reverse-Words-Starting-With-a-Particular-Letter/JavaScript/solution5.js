function specialReverse(s, c) {
	return s.split(" ").map(x => (x.includes(c)? x.split("").reverse().join("") : x)).join(" ")
}