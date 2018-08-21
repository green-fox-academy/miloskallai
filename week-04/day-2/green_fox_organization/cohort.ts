'use strict'

import {Person} from './person'

export class Cohort extends Person {
  
  protected students: any[];
  protected mentors: any[];

constructor(name: string){
  super(name);
  this.students = [];
  this.mentors = [];
  
}

  addStudent(Student){
    this.students.push(Student);
  }

  addMentor(Mentors){
    this.mentors.push(Mentors);
  }

  info(){
    console.log(`The ${this.name}) cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}