class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}


class Circle {
	constructor(rad){
    this.rad = rad;
  }
  getArea(){return Math.PI * Math.pow(this.rad, 2)};
  getPerimeter(){return 2 * Math.PI * this.rad };
}