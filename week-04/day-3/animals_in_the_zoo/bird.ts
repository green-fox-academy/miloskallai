import { Animal } from "./animals";

export class Bird extends Animal {
  constructor(name: string) {
    super(name);
    this.name = name;
  }

  getName() {
    return this.name;
  }

  breed() {
    return "laying eggs.";
  }
}
