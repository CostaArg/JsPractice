var Person = function (firstAndLast) {
  let fullName = "";
  
  this.getFullName = function () {
    return fullName;
  };
  this.getLastName = function () {
    return this.getFullName().split(" ")[1];
  };
  this.getFirstName = function () {
    return this.getFullName().split(" ")[0];
  };
  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
  this.setFirstName = function (first) {
    fullName = first + " " + fullName.split(" ")[1];
  };
  this.setLastName = function (last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };
  this.setFullName(firstAndLast);
  this.setFirstName(this.getFullName().split(" ")[0]);
  this.setLastName(this.getFullName().split(" ")[1]);
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());