var Lightsaber = function(colour) {
  this.colour = colour;
};

var redLightsaber = new Lightsaber('Red');
var yellowLightsaber = new Lightsaber('Yellow');

Lightsaber.prototype.getColour = function() {
  return this.colour;
}

console.log(redLightsaber.getColour());

// Calling a function on an object but changing the context of this
console.log(redLightsaber.getColour.apply(yellowLightsaber));