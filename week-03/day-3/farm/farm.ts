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
  slots: number;

  breed(animalName: string) {
    if (this.slots > 0) {
      let animalName = new Animal();
      this.animals.push(animalName);
      this.slots -= 1;
    }
  }

  slaughter() {
    let maxHunger: number[] = [];
    for (let i: number = 0; i < this.animals.length; i++) {
      maxHunger.push(this.animals[i]["hunger"]);
    }

    let leastHungry = Math.min(...maxHunger);

    animals.forEach(function(element, index) {
      if (element["hunger"] === leastHungry) {
        animals.splice(index, 1);
      }
    });

    this.slots += 1;
    return this.animals;
  }

  constructor(animalList: Object[]) {
    this.slots = 5;
    if (this.slots > 0) {
      this.animals = animalList;
    }
  }
}

let animalFarm = new Farm(animals);
animalFarm.slaughter();

console.log(animalFarm.animals);
