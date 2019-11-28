let carLot = {}

const carMaker = (make) => {
	carLot[make] = 0
	return function(num) {
		carLot[make] += num
	}
}