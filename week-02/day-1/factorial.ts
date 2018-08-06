// -  Create a function called `factorio`
//    that returns it's input's factorial
export { };

function factorio(inputNumber: number): number {
    if (inputNumber === 0  || inputNumber === 1) 
        return 1;
        for(let i: number = inputNumber - 1; i >= 1; i--){ 
           // console.log(i);
        inputNumber = inputNumber * i;
        }
        return inputNumber;
}

let result = factorio(4);
console.log(result);