const hammingDistance = (a, b) => 
	[...a].reduce((t, c, i) => t + (c != b[i]), 0);