let btn = document.querySelector('button');
let h1 = document.querySelector('h1');

let clickCounter = 0;
let seconds = 0;
let fiveSeconds = false;

setTimeout(() => {fiveSeconds = true}, 5000);

btn.addEventListener('click', () => {
  clickCounter++;
  if(clickCounter === 3 && fiveSeconds){
    h1.innerHTML = '5 seconds elapsed and clicked 3 times';
  }
});
