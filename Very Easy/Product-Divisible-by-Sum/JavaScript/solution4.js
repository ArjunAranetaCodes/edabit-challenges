function lettersOnly(str) {
	const regex = /[A-Za-z]/g;
	
	return str.match(regex).join("");
}