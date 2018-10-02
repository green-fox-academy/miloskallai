'use strict'

const url = 'http://api.icndb.com/jokes/random';


window.onload = () => {
const btn = document.querySelector('.btn-joke');
const jokeContainer = document.querySelector('.joke-container');
btn.addEventListener('click', () => {

fetch(url)
.then(res => {
  return res.json() 
})
.then(myJson => {
  console.log(myJson.value.joke);
  let joke = document.createElement('p');
  joke.innerHTML = myJson.value.joke;
  jokeContainer.appendChild(joke);

})


})
}