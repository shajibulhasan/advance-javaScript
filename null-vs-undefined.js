let a;
//without assign value
console.log(a);


function add (num1, num2) {
    console.log(num1+num2);
}
//not return value
const result = add(12, 65);
console.log(result);



function add2 (num1, num2) {
    console.log(num1, num2);
}
//pass only one value
const result2 = add2(12);
console.log(result2);



const person = {name:"Soaib", phone:"01571171044"};
//gf object not declare
console.log(person.gf);


let fun = undefined;
// assign undefined
console.log(fun);


let ages = [23,45,12,67];
// this array length 4, that why not find 12th position value
console.log(ages[12]);