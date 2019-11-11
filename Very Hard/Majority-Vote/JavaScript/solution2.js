var vote = function(arr) {
  var r = {};
  for (var i in arr) {
    r[arr[i]] ? r[arr[i]]++ : (r[arr[i]] = 1);
  }
  return r;
};

function majorityVote(arr) {
	var n = arr.length / 2;
	var r = vote(arr);
	for (var i in r) {
		if (r[i] > n) return i;
	}
	return null;
}