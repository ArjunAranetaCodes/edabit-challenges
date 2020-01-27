const rootDigit = n =>
	BigInt(n) < 10n ? Number(n) : rootDigit([...''+n].reduce((a,v) => +v+a, 0));