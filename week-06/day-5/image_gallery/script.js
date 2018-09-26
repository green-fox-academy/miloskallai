const pictures = [
  {
    imgSrc: 'img/berkshire_pig.jpg',
    imgDesc:
      'Berkshire pigs are a rare breed of pig originating from the English county of Berkshire that are bred and raised in several parts of the world, including England, Japan, the United States, Australia, and New Zealand. ',
    name: 'Berkshire pig'
  },
  {
    imgSrc: 'img/duroc_pig.jpg',
    imgDesc:
      'The Duroc pig is an older breed of domestic pig. The breed was developed in the United States and formed the basis for many mixed-breed commercial hogs.',
    name: 'Duroc pig'
  },
  {
    imgSrc: 'img/vietnamiese_pot_bellied_pig.jpg',
    imgDesc:
      'Vietnamese Pot-bellied is the exonym for the Lon I or I pig, an endangered traditional Vietnamese breed of small domestic pig. The I is uniformly black and has short legs and a low-hanging belly, from which the name derives.',
    name: 'Vietnamese Pot-bellied pig'
  }
];

const moveLeft = document.querySelector('.arrow-left');
const moveRight = document.querySelector('.arrow-right');
const pigHead = document.querySelector('.icofont-pig');
const thumbnails = document.querySelector('.thumbnails');
let image = document.querySelector('img');
let descreption = document.querySelector('.img-description');
let header = document.querySelector('h1');

const firstPigSound = new Audio('audio/pig.wav');

let counter = 0;

image.src = pictures[0].imgSrc;
descreption.textContent = pictures[0].imgDesc;
header.textContent = pictures[0].name;

pigHead.onclick = () => {
  firstPigSound.play();
};

for(let i = 0; i < pictures.length; i++){
  let thumbnailImg = document.createElement('img');
  thumbnailImg.src = pictures[i].imgSrc;
  thumbnailImg.classList.add('thumbnail-img');
  thumbnails.appendChild(thumbnailImg);
 }

moveRight.onclick = () => {
  counter++;
  if (counter < pictures.length) {
    image.src = pictures[counter].imgSrc;
    descreption.textContent = pictures[counter].imgDesc;
    header.textContent = pictures[counter].name;
  }
};

moveLeft.onclick = () => {
  counter--;
  if (counter > -1) {
    image.src = pictures[counter].imgSrc;
    descreption.textContent = pictures[counter].imgDesc;
    header.textContent = pictures[counter].name;
  }
};

window.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowRight') {
    counter++;
    image.src = pictures[counter].imgSrc;
    descreption.textContent = pictures[counter].imgDesc;
    header.textContent = pictures[counter].name;
  }

  if (event.code === 'ArrowLeft') {
    counter--;
    image.src = pictures[counter].imgSrc;
    descreption.textContent = pictures[counter].imgDesc;
    header.textContent = pictures[counter].name;
  }
});

