'use strict'
import {Person} from './person'

export class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name: string, age:number, gender:string, company:string, hiredStudents:number){
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }



  getGoal(){
    console.log('Hire brilliant junior software developers.');
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire(){
    this.hiredStudents += 1;
  }
}