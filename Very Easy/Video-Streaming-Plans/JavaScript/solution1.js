class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!

const StandardPlan = {
	...BasicPlan,
	hasHD: true,
	numOfDevices: 2,
	price: '$12.99'
}

const PremiumPlan = {
	...StandardPlan,
	hasUHD: true,
	numOfDevices: 4, 
	price: '$15.99'
}