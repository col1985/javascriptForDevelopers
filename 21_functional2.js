// NOTE: map acts on the variable itself

var myNumbers = [1, 2, 3, 4];

// With map
myNumbers.map(function(item) {
    return item * item;
  }) // --> [1, 4, 9, 16]

// With forEach
var mySquares = []; // We need extra state and also make sure it's properly initialised

myNumbers.forEach(function(item) {
  var tempSquare = item * item; // More state; can be inlined in a simple function but not always
  mySquares.push(tempSquare);
});

mySquares // --> [1, 4, 9, 16]

// Run it again with map
myNumbers.map(function(item) {
    return item * item;
  }) // --> [1, 4, 9, 16] || Immutable state

// Run it again with forEach
myNumbers.forEach(function(item) {
  var tempSquare = item * item;
  mySquares.push(tempSquare);
});

mySquares // --> [1, 4, 9, 16, 1, 4, 9, 16] // Mutable state that has to be explicitely handled