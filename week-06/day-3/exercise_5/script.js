let list = document.querySelector('ul');
let greenFox = document.createElement('li');
let lampLighter = document.createElement('li');
let header = document.createElement('h1');
let container = document.querySelector('.container');
let image = document.createElement('img');

greenFox.textContent = 'The Green Fox';
lampLighter.textContent = 'The Lamplighter';
header.textContent = 'I can add elements to the DOM!';
image.setAttribute('src', 'http://blog.ac-versailles.fr/readingandwritingisfun/public/.hot-dog-mustard-small_s.jpg');

list.appendChild(greenFox);
list.appendChild(lampLighter);
container.appendChild(header);
container.appendChild(image);
g