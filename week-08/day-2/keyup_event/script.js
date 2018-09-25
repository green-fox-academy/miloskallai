'use strict'

let h1 = document.querySelector('h1');

let key;
document.addEventListener('keypress',(event) => {
  h1.innerHTML = `Last pressed keykode is ${event.charCode}`;
  console.log(event.charCode)
});

