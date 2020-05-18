const hammingDistance = (a, b) =>
	[...a].filter((x, i) => x != b[i]).length