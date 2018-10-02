'use strict'

const url = 'http://api.icndb.com/jokes/random';
const btn = document.querySelector('.btn-joke');

window.onload = () => {
btn.addEventListener('click', () => {

fetch(url)
.then(res => {
  return res.json() 
})
.then(myJson => {
  console.log(myJson);
})


})
}