findFrequent = a =>
	a.sort().reduce((r, x, i, v) =>
									(c = v.lastIndexOf(x) - i) > r[0] ? [c, x] : r, [0])[1]