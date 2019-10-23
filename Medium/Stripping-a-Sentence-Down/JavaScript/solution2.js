const stripSentence = (str, lst) => {
	return [...str].filter(chr => !lst.includes(chr)).join("");
}