// -  Create a function called `factorio`
//    that returns it's input's factorial
export{}

function factorio(inputNumber: number): number{
for(let i: number = 1; i < inputNumber + 1; i++){ 
    let numTwo: number = 2;
    numTwo *= i;
    return numTwo; 

    }
}

console.log(factorio(4));

//3! = 3 * 2 * 1 = 6
//4! = 4 * 3 * 2 * 1 = 24