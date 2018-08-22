import { Instrument } from "./instruments";
import { StringedInstrument } from "./stringed-instruments";

export class ElectricGuitar extends StringedInstrument {
  guitarSound: string;

  constructor(numberOfStrings?: number, guitarSound?: string, name?: string) {
    super();
    this.numberOfStrings = 6;
    this.guitarSound = "Twang";
    this.name = "Electric Guitar"
  }

  play(){
    console.log(`Electric Guitar, a ${this.numberOfStrings} stringed instrument that goes ${this.guitarSound}`);
  }
}
