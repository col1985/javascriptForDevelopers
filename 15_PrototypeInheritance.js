function Person() {}

var obi_wan = new Person();
var luke = new Person();

Person.prototype.force = '74';
Person.prototype.printForce = function() {
  console.log('Force level: ', this.force);
};

console.log("Luke's force level: ", luke.force);
obi_wan.printForce();