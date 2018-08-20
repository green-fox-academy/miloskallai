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

}