function majorityVote(arr) {
	return [...new Set(arr)]
		.filter(a => arr.filter(b => b === a).length > arr.length/2)
		[0] || null
}