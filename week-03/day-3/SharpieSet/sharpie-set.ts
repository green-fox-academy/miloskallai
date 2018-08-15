import { Sharpie } from "./sharpie";

let yellow = new Sharpie("yellow", "thin");
let blue = new Sharpie("thick", "blue");
let red = new Sharpie("red", "thin");
let purple = new Sharpie("purple", "thin");
let green = new Sharpie("thick", "green");
let orange = new Sharpie("orange", "thin");

red.use(100);
purple.use(120);

let toSharpieCollection: any[] = [yellow, blue, red, purple, green, orange];

class SharpieSet {
  sharpieList: any[] = [];

  countUsable(sharpieList) {
    let usableSharpies: any[] = [];
    sharpieList.forEach(function(element) {
      if (element.inkAmount <= 0) {
        usableSharpies.push(element);
      }
    });
    console.log(usableSharpies);
  }

  removeTrash() {}

  constructor(colorfulSharpie: any[]) {
    this.sharpieList = colorfulSharpie;
  }
}

let sharpieCollection = new SharpieSet(toSharpieCollection);

console.log(sharpieCollection.countUsable(sharpieCollection.sharpieList));
