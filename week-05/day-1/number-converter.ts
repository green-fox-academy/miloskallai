"use strict";

const zeroToNineteen: string[] = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "elven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];
const twentyToNinety: string[] = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];

export function convert(currency: any): any {
  if (typeof currency === "number") {
    let numberString: string = currency.toString();
    let resultNumber: string[] = [];

    if (currency < 20) {
      resultNumber[0] = zeroToNineteen[currency];
      return resultNumber[0];
    } else {
      if (numberString.length === 2 && currency > 19) {
        resultNumber[0] = twentyToNinety[numberString[0]];
        resultNumber[1] = zeroToNineteen[numberString[1]];

        return resultNumber.join("-");
      }
    }
  } else if (typeof currency === "string") {
    let resultString: number[] = [];
    if (currency.indexOf("-") === -1) {
      if (currency === "twenty") {
        return 20;
      }
      resultString[0] = zeroToNineteen.indexOf(currency);
      return resultString[0];
    } else {
      let splitWords: string[] = currency.split("-");
      resultString[0] = twentyToNinety.indexOf(splitWords[0]);
      resultString[1] = zeroToNineteen.indexOf(splitWords[1]);
      return parseInt(resultString.join(""));
    }
  }
}
