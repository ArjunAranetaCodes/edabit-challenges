function cmsSelector(arr, str) {
	var arrCMS = []
	for(var x = 0; x < arr.length; x++){
		if(arr[x].includes(str)){
			arrCMS.push(arr[x])
		}
	}
	arrCMS.sort()
	return arrCMS
}