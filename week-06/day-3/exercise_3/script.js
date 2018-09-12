let imgURL = document.querySelector('img');
let linkToGF = document.querySelector('a');
let buttonToDisable = document.querySelector('.this-one');

console.log(imgURL);

imgURL.setAttribute('src', 'https://i.imgflip.com/issmr.jpg');
linkToGF.setAttribute('href', 'https://www.greenfoxacademy.com/');

buttonToDisable.disabled = true;
buttonToDisable.textContent = `Don't click me`;