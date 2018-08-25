"use strict";

export class Aircraft {
  
  protected type: string;
  protected ammo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected priority: boolean;

fight(){

}

refill(){

}

getType(){
    return this.type;
}

getStatus(){

}

isPriority(){
    return this.priority;
}




}
