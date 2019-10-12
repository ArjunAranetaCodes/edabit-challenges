function changeEnough(change, amountDue) {
	let quarter = change[0] * .25
	let dime = change[1] * .1
	let nickle = change[2] *.05
	let penny = change[3] *.01
	return (quarter+dime+nickle+penny >= amountDue)
	
}