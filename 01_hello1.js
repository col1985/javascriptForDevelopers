var sayHello2 = function () {
  console.log('Hello World 2');
}

console.log('Hello World 1');

setTimeout(sayHello2, 0); // Execute the function passed in 0ms.

console.log('Hello World 3');
