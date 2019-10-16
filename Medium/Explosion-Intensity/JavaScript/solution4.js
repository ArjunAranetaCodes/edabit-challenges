const boomIntensity = n => {
	let i = [n<2, !(n%10), !(n%5), !(n%2), true].indexOf(true);
	switch(i) {
		case 0: return `boom`;
		case 1: return `B${"O".repeat(n)}M!`;
		case 2: return `B${"O".repeat(n)}M`;
		case 3: return `B${"o".repeat(n)}m!`;
		case 4: return `B${"o".repeat(n)}m`;
	}
}