class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}
​
​
class Circle {
  constructor(r){
    this.r = r;
  }
  
  getArea(){return Math.PI * this.r * this.r}
  getPerimeter(){return 2 * Math.PI * this.r}
}
​
let q = new Circle(4.44);