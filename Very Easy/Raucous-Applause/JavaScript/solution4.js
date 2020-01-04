function cmsSelector(arr, str) {
	return arr.filter(cms => cms.includes(str)).sort();
}