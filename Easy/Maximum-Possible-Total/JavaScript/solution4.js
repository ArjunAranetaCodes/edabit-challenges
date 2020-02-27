const maxTotal = nums =>
	nums
		.sort((a,b) => b - a)
		.reduce((acc,cur,idx) => idx < 5 ? acc + cur : acc, 0)