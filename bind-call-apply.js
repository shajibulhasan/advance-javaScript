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
  
const person2 = {
    firstName: "Abdul",
    lastName: "Mutaleb",
    salary: 70000,
    getFullName: function(){
       console.log(this.firstName, this.lastName);
    }
}

//way 1
// bind object return kor a
// const salaryPerson2 = person.getSalary.bind(person2);
// salaryPerson2(1000);

//way 2
// person.getSalary.call(person2, 9000);

//way 3
// must value gulo array te dite hobe, value multiple hote pare
person.getSalary.apply(person2, [9000]);