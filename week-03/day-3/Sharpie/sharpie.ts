// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
  color: string;
  width: string;
  inkAmount: number;

  use() {
    this.inkAmount -= 1;
  }

  constructor(color: string, width: string) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }
}

let redSharpie = new Sharpie("red", "thin");
redSharpie.use();
console.log(redSharpie);
