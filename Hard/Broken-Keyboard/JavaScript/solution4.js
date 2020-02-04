const findBrokenKeys = (s1, s2) =>
 [...new Set([...s1+''].filter((a,b)=> a !== s2[b]))];