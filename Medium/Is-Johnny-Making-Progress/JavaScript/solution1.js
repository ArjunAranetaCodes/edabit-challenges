function progressDays(runs) {
	return runs.filter((e,i,a)=>e<a[i+1]).length;
}