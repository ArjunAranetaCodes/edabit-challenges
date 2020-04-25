const combinations = (...i) => 
 i.filter(x => x != 0).reduce((a,b)=> a*b);