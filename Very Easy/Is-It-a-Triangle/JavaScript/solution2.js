function isTriangle(a, b, c) {
	const val = [...arguments].sort((a,b)=>b-a)
  return val[0]<val[1]+val[2]
	
}