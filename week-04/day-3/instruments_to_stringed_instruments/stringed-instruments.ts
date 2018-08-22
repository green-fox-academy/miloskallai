import {Instrument} from './instruments'

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  sound(){
    super.play();
  }


}