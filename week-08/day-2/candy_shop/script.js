let createCandy = document.querySelector('.create-candies');
let buyLollipops = document.querySelector('.buy-lollipops');
let candyRain = document.querySelector('.candy-machine');
let lollipopCounter = document.querySelector('.lollipops');
let candyCounter = document.querySelector('.candies');
let candySpeed = document.querySelector('.speed');

let candies = 1;
let lollipops = 1;
let isItRain = false;

createCandy.addEventListener('click', () => {
  candyCounter.innerHTML = candies++;
});

buyLollipops.addEventListener('click', () => {
  if(candies >= 100){
    candyCounter.innerHTML = candies -= 100;
    lollipopCounter.innerHTML = lollipops++;
  }
  
});

candyRain.addEventListener('click', () => {
  isItRain = true;
});

setInterval(() => {
  if (lollipops >= 10) {
    candyCounter.innerHTML = candies++;
    candySpeed.innerHTML = 1;
  }
}, 1000);

setInterval(() => {
  if (lollipops >= 10 && isItRain) {
    candyCounter.innerHTML = candies++;
    candySpeed.innerHTML = 10;
  }
}, 100);
