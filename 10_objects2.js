// Returning a function

var counter = function (count) {
  console.log('Count is ' + count);
  return {
    getNext: function () {
      return ++count;
    }
  }
}

var myCounter = counter(0);

console.log('Count is ' + myCounter.getNext());
console.log('Count is ' + myCounter.getNext());
console.log('Count is ' + myCounter.getNext());
