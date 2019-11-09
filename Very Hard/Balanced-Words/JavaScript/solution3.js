function balanced(word) {
	let nums = word.toLowerCase()
	.split("")
	.map(letter => {
		return letter.charCodeAt(0) - 96;
	})

	return (
		nums.slice(0,Math.floor(nums.length/2))
		.reduce((total, elem) => {return total + elem}) === 
		nums.slice(Math.ceil(nums.length/2), nums.length)
		.reduce((total, elem) => {return total + elem})
				 )
}