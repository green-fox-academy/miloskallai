'use strict';

const url = 'http://api.icndb.com/jokes/random';

window.onload = () => {
  const btn = document.querySelector('.btn-joke');
  const jokeContainer = document.querySelector('.joke-container');
  btn.addEventListener('click', () => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(myJson => {
        let joke = document.createElement('p');
        joke.innerHTML = myJson.value.joke;
        jokeContainer.appendChild(joke);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
