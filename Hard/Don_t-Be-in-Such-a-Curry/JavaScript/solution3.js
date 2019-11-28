let carLot = {}

const carMaker = (make) => {
	return (num) => {
		var total = carLot[make] === undefined ? 0 : carLot[make]
		carLot[make] = total + num
	}
}