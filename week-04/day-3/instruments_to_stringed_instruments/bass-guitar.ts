import {Instrument} from './instruments'
import {StringedInstrument} from './stringed-instruments'

export class BassGuitar extends StringedInstrument{
  
  bassGuitarSound:string;

  constructor(numberOfStrings?: number, bassGuitarSound?:string, name?:string){
    super();
    this.numberOfStrings = 4;
    this.bassGuitarSound = 'Duum-duum-duum';
    this.name = 'Bass Guitar';
  }

  play(){
    console.log(`Bass Guitar, a ${this.numberOfStrings} stringed instrument that goes ${this.bassGuitarSound}`);
  }
 
}

