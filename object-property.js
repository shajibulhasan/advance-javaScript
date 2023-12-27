const students = [
    {id: 21, name: 'Hasan'},
    {id: 22, name: 'Soaib'},
    {id: 23, name: 'Shajibul'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>22 );
console.log(names);
console.log(ids);
console.log(bigger);
