var name = 'Luke';

var myObject = {
  // name is not a variable its a property of the object
  name: 'Obi-Wan',
  getName: function () {
    return this.name;
  },
  getWrongName: function () {
    return name;
  }
};

console.log(myObject.getName());
console.log(myObject.getWrongName());
