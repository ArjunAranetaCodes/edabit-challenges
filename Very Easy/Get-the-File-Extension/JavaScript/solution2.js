function firstAndLast(s) {
	return [s.split("").sort().join(""), s.split("").sort().reverse().join("")];
}