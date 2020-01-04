function cmsSelector(arr, str) {
		return arr.sort().filter(item => item.indexOf(str) >= 0)
}