import {Instrument} from './instruments'
import {StringedInstrument} from './stringed-instruments'

export class Violin extends StringedInstrument{
  
  violinSound:string;

  constructor(numberOfStrings?: string, violinSound?: number, name?: string){
    super();
    this.numberOfStrings = 4;
    this.violinSound = 'Screech';
    this.name = 'Violin';
  }

  play(){
    console.log(`Electric Guitar, a ${this.numberOfStrings} stringed instrument that goes ${this.violinSound}`);
  }

}