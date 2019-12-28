function canComplete(initial, word) {
	const regex = new RegExp([...initial].map(c => `.*${c}`).join('') + '.*')
	return regex.test(word)
}