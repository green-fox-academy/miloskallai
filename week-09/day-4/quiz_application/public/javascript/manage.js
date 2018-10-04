const url = 'http://localhost:8080/questions';
const listQuestions = document.querySelector('.list-questions');

let radioBtn1 = document.getElementById('radio-1');
let radioBtn2 = document.getElementById('radio-2');
let radioBtn3 = document.getElementById('radio-3');
let radioBtn4 = document.getElementById('radio-4');

let newQuestionInput = document.querySelector('.new-question-input');

let newAnswerInput1 = document.querySelector('.new-answer-input-1');
let newAnswerInput2 = document.querySelector('.new-answer-input-2');
let newAnswerInput3 = document.querySelector('.new-answer-input-3');
let newAnswerInput4 = document.querySelector('.new-answer-input-4');

let btnSubmit = document.querySelector('.btn-submit');

radioBtn1.addEventListener('click', () => {
  isClicked(radioBtn1);
});

radioBtn2.addEventListener('click', () => {
  isClicked(radioBtn2);
});

radioBtn3.addEventListener('click', () => {
  isClicked(radioBtn3);
});

radioBtn4.addEventListener('click', () => {
  isClicked(radioBtn4);
});

let body = {
  question:newQuestionInput.value, 
  answer1: newAnswerInput1.value, 
  answer2: newAnswerInput2.value, 
  answer3: newAnswerInput3.value, 
  answer4: newAnswerInput4.value,
  isCorrect1: radioBtn1.value,
  isCorrect2: radioBtn2.value,
  isCorrect3: radioBtn3.value,
  isCorrect4: radioBtn4.value
}

btnSubmit.addEventListener('submit', () => {
 console.log(body)
  })





window.onload = () => {

  renderQuestions();

  function renderQuestions() {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        let questions = myJson;
        for(let i = 0; i < questions.length; i++){
          let questionParagraph = document.createElement('p');
          questionParagraph.classList.add('question-paragraph');
          questionParagraph.setAttribute('id', questions[i].id);
          questionParagraph.innerHTML = questions[i].question;
          listQuestions.appendChild(questionParagraph);

          let deleteQuestion = document.createElement('button');
          deleteQuestion.innerHTML = 'delete';
          deleteQuestion.classList.add('delete-question');
          questionParagraph.appendChild(deleteQuestion);

          deleteQuestion.addEventListener('click', ()=> {

            fetch(`http://localhost:8080/questions/${questions[i].id}`,{
              method: "delete"
            }).then(response => {
              response.json();
            })
            listQuestions.removeChild(questionParagraph);
          })
        }
      });
  }
};

function isClicked(element){
    element.value = 1;
}