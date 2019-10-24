function stripSentence(str, chars) {
	return str.split("").filter(obj => !chars.includes(obj)).join("")
}