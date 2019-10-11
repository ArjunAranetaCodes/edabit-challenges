const censor = s => s.split(' ') 
 .map(x => x.length > 4 ?  
	x.replace(x, "*".repeat(x.length)): x).join(' ');