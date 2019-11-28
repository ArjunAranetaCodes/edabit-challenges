let carLot = {};

const carMaker = make => {
	carLot[make] = 0;
	return (n) => carLot[make] += n;
};