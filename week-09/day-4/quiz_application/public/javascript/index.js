const url = 'http://localhost:8080/game';
const questionParagraph = document.querySelector('.question');
const answerContainer = document.querySelector('.answer-container');
const score = document.querySelector('.score');

window.onload = () => {
  let scoreNumber = 0;
  score.innerHTML = scoreNumber;
  renderAnswers();

  function renderAnswers() {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      let question = myJson.question;
      let answer = myJson.answer;
      console.log(answer);

      questionParagraph.innerHTML = question.question;
     

        for (let i = 0; i < answer.length; i++) {
          let answerBtn = document.createElement('button');
          answerBtn.setAttribute('id', answer[i].id);
          answerBtn.classList.add('answer-btn');
          answerBtn.innerHTML = answer[i].answer;
          answerContainer.appendChild(answerBtn);
         
          answerBtn.addEventListener('click', () => {
            let deleteBtn = document.querySelectorAll('.answer-btn');
            if (answer[i].is_correct === 1) {
              answerBtn.style.backgroundColor = 'green';
              scoreNumber++;
              score.innerHTML = scoreNumber;
              setTimeout(() => {
                deleteElements(deleteBtn, answerContainer);
                renderAnswers();
              }, 1000)
            } else {
              answerBtn.style.backgroundColor = 'red';
              setTimeout(() => {
                deleteElements(deleteBtn, answerContainer);
                renderAnswers();
              }, 1000)
            }
          });
        }
      
    });
  }
};

function deleteElements(child, parent){
  for(let i = 0; i < child.length; i++){
    parent.removeChild(child[i]);
  }
}
