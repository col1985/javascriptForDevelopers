// Returning a function

var counter = function(count) {
  console.log('Count is ' + count);
  return {
    getNext: function() {
      return ++count;
    }
  }
}

var myCounter = counter(0);
myCounter.getNext();
myCounter.getNext();