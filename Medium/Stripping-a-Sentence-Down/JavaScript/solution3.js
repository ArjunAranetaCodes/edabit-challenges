const stripSentence = (str, chars) =>
	str.replace(new RegExp(`[${chars}]`, 'g'), '');