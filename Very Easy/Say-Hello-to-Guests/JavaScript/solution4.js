function getExtension(arr) {

	for(i=0;i<arr.length;i++){
	arr[i]=arr[i].slice(arr[i].indexOf(".")+1);
}
	return arr;
}