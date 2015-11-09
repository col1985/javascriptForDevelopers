for (var i = 0, l = 10; i < l; i++) {
  // closes the value for i at the point at which it is passed to the function.
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  })(i);
}