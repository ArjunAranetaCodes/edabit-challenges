function canComplete(initial, word) {
	return new RegExp(["", ...initial, ""].join(".*")).test(word);
}