let carLot = {};

const carMaker = make =>
	numCars => carLot[make] = (carLot[make] || 0) + numCars;