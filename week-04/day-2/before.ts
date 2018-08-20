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
    this.hiredStudents += 1;
  }

  constructor(name: string, age: number, gender: string, company:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hiredStudents = 0;
    this.company = company;
  }

}

//TEST INPUT
let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe', 30, 'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('Jane Doe', 30, 'female', 'The School of Life');
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');
people.push(mentor);
let sponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon)

student.skipDays(3);

for (let i = 0; i < 3; i++) {
  elon.hire(i);
}

for (let i = 0; i < 5; i++) {
  sponsor.hire(i);
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}