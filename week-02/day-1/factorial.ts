// -  Create a function called `factorio`
//    that returns it's input's factorial
export { };

function factorio (num: number): number {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorio(4));