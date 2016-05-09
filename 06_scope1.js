// Javascript hoists the declaration to the top but not the assignment of the variable

var currentLocation = 'Waterford';

function whereAreYa() {
  console.log(currentLocation);
  var currentLocation = 'Dublin';
  console.log(currentLocation);
}

whereAreYa();

console.log(currentLocation);
