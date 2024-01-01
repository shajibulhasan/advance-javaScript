async function hello (name){
    return 'Hello ' + name;
}
const greeting = hello("Soaib");
console.log(greeting);
greeting.then(res => console.log(res));