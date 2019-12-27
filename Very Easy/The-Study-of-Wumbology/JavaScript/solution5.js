function wumbo(words) {
	return words.split("").map((i) => i.startsWith("M") ? i.replace("M", "W") : i).join("")
}