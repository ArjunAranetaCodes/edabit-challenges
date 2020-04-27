function rev(n) {
	let arr=n.toString().split('')
	let ans= arr.reverse()
	
	if(ans[ans.length-1]!="-"){return ans.join('')}
	else{
	 ans.pop()
		return ans.join('')
	}
}