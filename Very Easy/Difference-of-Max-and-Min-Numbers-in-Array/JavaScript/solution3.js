class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

class StandardPlan extends BasicPlan {
	static numOfDevices = 2;
	static hasHD = true;
	static price = '$12.99';
}

class PremiumPlan extends BasicPlan {
	static numOfDevices = 4;
	static hasHD = true;
	static hasUHD = true;
	static price = '$15.99';
}