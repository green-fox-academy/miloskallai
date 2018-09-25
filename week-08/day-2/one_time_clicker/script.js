let btn = document.querySelector('button');
let isClicked = true;
let currentDate = new Date().toJSON().slice(0, 10);


/*
btn.addEventListener('click', event => {
  if (isClicked) {
    console.log(event.timeStamp);
    console.log(`Clicked on ${currentDate}`);
    isClicked = false;
  }
});
*/

btn.addEventListener('click', event => {
  console.log(`Clicked on ${currentDate}`);
  btn.disabled = true;
});
