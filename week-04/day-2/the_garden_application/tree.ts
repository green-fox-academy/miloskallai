'use strict'
import {Plant} from './plant'

export class Tree extends Plant  {

plantType: string;
needsWater: boolean;

  constructor(color: string){
    super(color);
    this.needsWater = true;
    this.plantType = 'tree';
  }

  isItNeedsWater(){
    if(this.needsWater === true){
      console.log(`The ${this.color} Tree needs water.`);
    } else {
      console.log(`The ${this.color} Tree doesn't need water.`);
    }
  }

}