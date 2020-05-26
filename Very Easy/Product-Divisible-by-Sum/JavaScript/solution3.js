function lettersOnly(str) {
	let regEx = /[a-z]/ig
	return str.match(regEx).join("");
}