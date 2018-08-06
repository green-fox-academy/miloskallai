// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

export{}

function printParams (firstParameter: string, secondParameter: string): string {
   return firstParameter + ' ' + secondParameter;
}

console.log(printParams('hello', 'hi'));
