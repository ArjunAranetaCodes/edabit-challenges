function removeLeadingTrailing(n) {
	//Number(n)
	return +((n.match(/[1-9]\d*|(?=\.)\.\d*[1-9]/g)||[]).join(''))
}