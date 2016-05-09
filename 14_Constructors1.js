function Car() {
  this.wheels = 4;
}

var redCar = new Car();
console.log(typeof redCar); // object
console.log(redCar.wheels); // 4

var otherCar = Car(); // DO NOT FORGET the new keyword
console.log(typeof otherCar); // undefined
console.log(otherCar.wheels); // typeError
console.log(window.wheels); // 4
