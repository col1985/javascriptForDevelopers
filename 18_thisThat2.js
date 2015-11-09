var luko = {
  firstname: 'Luko'
};
luko.getFullName = function() {
  var that = this;
  var printFullName = function(surname) {
      console.log('Full Name: ', this.firstname + ' ' + this.surname);
      console.log('Full Name: ', that.firstname + ' ' + surname);
    }
    // called from this context i.e. the luko object
  printFullName("O'Connell");
}

luko.getFullName();