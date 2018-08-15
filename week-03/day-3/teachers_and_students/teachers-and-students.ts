class Student {
  learn() {
      console.log('I am learning.');
  }
  question(askTheTeacher) {
    askTheTeacher.answer();
  }
}

class Teachers {
  teach(toTeach) {
    toTeach.learn();
  }
  answer() {
      console.log('This is an answer.');
  }
}

let newStudent = new Student();

let newTeacher = new Teachers();


newStudent.question(newTeacher);
newTeacher.teach(newStudent);