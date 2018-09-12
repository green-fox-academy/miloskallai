let list = document.querySelector('ul');
let kingLi = document.querySelector('li');

list.removeChild(kingLi);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

for(let i = 0; i < planetData.length; i++){
  if(planetData[i].asteroid){
    let newAsteroid = document.createElement('li');
    newAsteroid.textContent = planetData[i].content;
    list.appendChild(newAsteroid);
  }
}