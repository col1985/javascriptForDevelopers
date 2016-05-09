var myNumbers = [1, 2, 3, 4];

// With map - functional approach
myNumbers.map(function (item) {
    return item * item;
  }) // --> [1, 4, 9, 16]

// With forEach,
var mySquares = []; // We need extra state and also make sure it's properly initialised

myNumbers.forEach(function (item) {
  var tempSquare = item * item; // More state; can be inlined in a simple function but not always
  mySquares.push(tempSquare);
});

mySquares // --> [1, 4, 9, 16]
