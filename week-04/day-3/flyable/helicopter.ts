import {Flyable} from './flyable';
import {Vehicle} from './vehicle';

class Helicopter extends Vehicle implements Flyable{
  
  constructor(type:string, id: number, flyingDistance: number){
    super(type, id, flyingDistance,);
  }

  land() {
    return `${this.type} helicopter is landing.`; 
  }

  fly() { 
    return `${this.type} helicopter is flying.`;
  }

  takeOff() {
    return `${this.type} helicopter is taking off.`;
  }
   
}

let newHelicoptar = new Helicopter('military', 2331, 100);

console.log(newHelicoptar.takeOff());