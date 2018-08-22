import { Animal } from "./animals";

export class Mammal extends Animal {
  constructor(name: string) {
    super(name);
    this.name = name;
  }

  getName() {
    return this.name;
  }

  breed() {
    return "pushing miniature versions out.";
  }
}
