function frequency(arr) {
	var freq = {};
	arr.forEach(function(i) {
		freq[i] ? freq[i]+=1 : freq[i]=1;
	});		
	
	return freq
}

function commonLastVowel(str) {
	var pattern = /[aeiou]/gi;
  str = str.replace(/[!]/g, "");
  var col = str.split(" ");

  var vowels = col.map(function(elem) {
    if (elem.slice(-1).match(pattern)) {
      return elem.slice(-1);
    } else {
      var matches = elem.match(pattern)
      return matches[matches.length-1]
    }
  });

  var freq = frequency(vowels)
  var maxOccur = Math.max(...[...Object.values(freq)])
  for (var k in freq) {
    if (freq[k] === maxOccur)
      return k.toLowerCase();
  }
}