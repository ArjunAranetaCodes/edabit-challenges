function divisible(arr) {
	let sum=arr.reduce((a,b)=> a+b);
	let product=arr.reduce((a,b)=> a*b);
	if(product%sum==0) return true;
	else return false;
}