import {Flyable} from './flyable';

export abstract class Vehicle {
  type: string;
  id: number;
  flyingDistance: number;

  constructor(type:string, id: number, flyingDistance: number){
    this.type = type;
    this.id = id;
    this.flyingDistance = flyingDistance;
  }

}