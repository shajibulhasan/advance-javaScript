function add() {
    let sum = 0;
    const numbers = [...arguments];
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

const result = add(2,4,6,8,9);
console.log(result);