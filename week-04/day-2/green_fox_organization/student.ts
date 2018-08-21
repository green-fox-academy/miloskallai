'use strict'
import {Person} from './person'

export class Student extends Person {
  private previousOrganisation: string;
  private skippedDays: number;

  constructor(name:string, age: number, gender:string, previousOrganisation: string){
    super(name, age, gender);
    this.previousOrganisation = previousOrganisation;
    this.skippedDays = 0;
  }

  getGoal(){
    console.log('Be a junior software developer.');
  }

  introduce(){
    super.introduce();
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganisation}, who ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays: number){
    this.skippedDays += numberOfDays;
  }

}
