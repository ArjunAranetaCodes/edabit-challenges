function cmsSelector(arr, str) {
	return arr.sort().filter((word) => word.toLowerCase().includes(str));
}