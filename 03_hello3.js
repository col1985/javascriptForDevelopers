var sayHello2 = function() {
  console.log('Hello World 2');
}

var sayHello4 = function() {
  console.log('Hello World 4');
}

console.log('Hello World 1');

setTimeout(sayHello2, 2000); // Execute the function passed in 2s.

console.log('Hello World 3');

setTimeout(sayHello4, 500); // Execute the function passed in 1s.