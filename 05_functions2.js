var printFullName = function(fullName) {
  console.log(fullName);
};

printFullName('Grace Hopper');

var createFullNameAndPrintIt = function(first, last, callback) {
  var fullName = first + ' ' + last;
  callback(fullName); //Should really check if callback is a function
};

createFullNameAndPrintIt('Grace', 'Hopper', printFullName);

createFullNameAndPrintIt('Grace', 'Hopper', function(fullName) {
  console.log('Commander ' + fullName);
});