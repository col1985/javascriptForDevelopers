var currentLocation = 'Waterford';

function whereAreYa() {
  console.log(currentLocation);
  var currentLocation = 'Dublin'; // Javascript does not hoist this to the top of the function
  console.log(currentLocation);
}

whereAreYa();

console.log(currentLocation);