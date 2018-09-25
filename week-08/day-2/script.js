let listItem = document.querySelectorAll('li');
let button = document.querySelector('button');
let result = document.querySelector('.result');

let counter = listItem.length;

button.addEventListener('click', ()=> {
  result.innerHTML = counter;
});
