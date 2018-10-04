const url = 'http://localhost:8080/questions';
const listQuestions = document.querySelector('.list-questions');

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
