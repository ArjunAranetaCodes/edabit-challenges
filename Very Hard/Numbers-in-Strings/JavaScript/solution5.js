function getHashTags(str) {
	return str.toLowerCase()
		.replace(/[,.?]/g,'')
		.split(/\s+/)
	  .map(function(x,i){
		  return [x,i];
	  })
		.sort(function(a,b){
		  var c = b[0].length - a[0].length; 
		  if (c != 0) return c;
		  return a[1]-b[1];
	  })
		.slice(0,3)
	  .map(function(x) {
		  return '#'+x[0];
	  });
}