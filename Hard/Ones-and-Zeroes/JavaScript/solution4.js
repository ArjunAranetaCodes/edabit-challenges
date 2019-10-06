const sameLength=s=>
	JSON.stringify(s.match(/0+/g))==
	JSON.stringify(s.match(/1+/g).map(e=>e.replace(/1/g,0)))