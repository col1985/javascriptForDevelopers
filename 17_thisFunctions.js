var getSurname = function () {
  console.log('Surname is: ' + this.surname);
}

getSurname() // undefined

var obi_wan = {
  name: 'Obi-Wan',
  surname: 'López'
};
obi_wan.getSurname = getSurname;

console.log(obi_wan.getSurname()); // 'Surname is López'
