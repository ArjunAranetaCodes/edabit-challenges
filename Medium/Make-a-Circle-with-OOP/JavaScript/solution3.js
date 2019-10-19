class Circle {
	constructor(r){
		this.r = r;
	}
	getArea = () => Math.PI * Math.pow(this.r,2);
	getPerimeter = () => 2 * Math.PI * this.r;
}