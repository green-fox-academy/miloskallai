class Person {
  name: string;
  age: number;
  gender: string;

  introduce(){
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ', ' + 'year old ' + this.gender + '.');
  }

  getGoal(){
    console.log('My goal is: Life for the moment!');
  }

  constructor(name: string, age: number, gender: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

}

let janeDoe = new Person('Jane Doe', 30, 'female');


class Student {

  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number

  introduce(){
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ', ' + 'year old ' + this.gender + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + ' days from the course already.');
  }

  getGoal(){
    console.log('Be a junior software developer.');
  }

  skipDays(numberOfDays: number){
    this.skippedDays += numberOfDays;
  }

  constructor(name: string, age: number, gender: string, previousOrganization: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

}

let janeDoeStudent = new Student('Jane Doe', 30, 'female', 'The School of Life');


class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  introduce(){
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ', ' + 'year old ' + this.gender + ', ' + this.level + ' mentor.');
  }

  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }

  constructor(name: string, age: number, gender: string, level: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

}

let janeDoeMentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');


class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  introduce(){
    console.log('Hi, I\'m ' + this.name + ', a ' + this.age + ', ' + 'year old ' + this.gender + ', who represents ' + this.company + ' and hired ' + this.hiredStudents + ' so far.');
  }

  getGoal(){
    console.log('Hire brilliant junior software developers.');
  }

  hire(studentsToHire: number){
    this.hiredStudents += studentsToHire;
  }

  constructor(name: string, age: number, gender: string, company){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hiredStudents = 0;
  }

}

let janeDoeSponsor = new Mentor('Jane Doe', 30, 'female', 'Google');

