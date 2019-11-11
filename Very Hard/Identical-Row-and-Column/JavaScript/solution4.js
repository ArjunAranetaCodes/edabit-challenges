function hasIdentical(arr) {
  var check = function(a, n) {
	  for (var i = 0; i < n; i++) {
			var f = true;
		  for (var j = 0; j < n; j++) {
			  if (arr[j][i] != a[j]) {
					f = false;
					break;
				}
		  }
			if (f) return true;
	  }
	  return false;
  };	
	var y = arr.length;
	for (var i = 0; i < y; i++) {
		var x = arr[i].length;
		if (x != y) return false;
		if (check(arr[i], x)) return true;
	}
	return false;
}