function indexMultiplier(arr) {
	return arr.reduce((cur,val,ind)=>cur+val*ind,0);
}