const censor = str =>
	str
		.split(' ')
		.map(word => word.length > 4 ? '*'.repeat(word.length) : word)
		.join(' ')