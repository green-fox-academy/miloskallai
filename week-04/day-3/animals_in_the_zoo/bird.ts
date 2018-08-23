import { Animal } from "./animals";
import { Flyable } from "./flyable";

export class Bird extends Animal implements Flyable {
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

  land() {
    return `${this.name} is landing`;
  }

  fly() {
    return `${this.name} is flying`;
  }

  takeOff() {
    return `${this.name} is takeing off`;
  }
}
