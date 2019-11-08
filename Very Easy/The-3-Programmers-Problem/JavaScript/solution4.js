function programmers(one, two, three) {
	let arr = [...arguments].sort((a,b)=>a-b)
	return arr.pop()-arr.shift()
}