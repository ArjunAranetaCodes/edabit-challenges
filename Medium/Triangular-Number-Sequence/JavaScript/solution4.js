function triangle(n) {
	let result = [1]
	for(var i=2; i<=n;i++) result.push(i+result[result.length-1])
	return result.pop()
}