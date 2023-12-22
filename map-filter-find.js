const numbers = [2,3,4,5,6,7,8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
const output = numbers.map(x => x*x);
console.log(output);


// map use korle element, index, array diye de
numbers.map(function (element, index, array) {
    console.log(element, index);
})



// filter array return kore
const bigger = numbers.filter( x => x > 4);
console.log(bigger) ;

// find condition check kore true hole aktai value return kore
const isThere = numbers.find( x=> x>7);
console.log(isThere);