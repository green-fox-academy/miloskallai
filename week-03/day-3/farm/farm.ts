import { Animal } from "./animal";

let cat = new Animal();
let horse = new Animal();
let lion = new Animal();
let dog = new Animal();
let monkey = new Animal();

lion.play();
cat.play();
horse.play();

let animals: object[] = [cat, horse, lion, dog, monkey];
//console.log(animals);

class Farm {
  animals: object[];
  slots: 5;

  breed(animalName: string) {
    if (this.slots < 0) {
      let animalName;
    }
  }

  slaughter() {
    let maxHunger: number[] = [];
    for (let i: number = 0; i < this.animals.length; i++) {
      // maxHunger.push(this.animals[i].hunger)
    }
  }

  constructor(animalList: Object[]) {
    if (this.slots > 0) {
      this.animals = animalList;
    }
  }
}

let animalFarm = new Farm(animals);

console.log(animalFarm.animals);
