export abstract class Animal {
  name: string;
  age: number;
  species: string;
  legs: string;
  origin: string;
  layingEgg: boolean;
  coldBlooded: boolean;

  constructor(name: string) {
    this.name = name;
  }

  getName(): void {}

  breed(): void {}
}
