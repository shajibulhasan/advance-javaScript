const person = {
  firstName: "Shajibul Hasan",
  lastName: "Soaib",
  salary: 90000,
  getFullName: function(){
     console.log(this.firstName, this.lastName);
  },
  getSalary: function(amount=0){
    console.log(this.salary - amount);
  }
}

person.getSalary(2000);