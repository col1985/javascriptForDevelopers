// 'getName' is a method so 'this' inside of getName
// refers to the object that owns the method

var personConfig = {
  name: 'No Name',
  surname: 'No Surname',
  getName: function () { //This is a 'method'
    return this.name;
  }
}

console.log(personConfig.getName());
