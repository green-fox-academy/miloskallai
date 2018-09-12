let body = document.querySelector('body');
let startingListDiv = document.createElement('div');
let buttonDiv = document.createElement('div');
let finalDiv = document.createElement('div');
let unorderedList = document.createElement('ul');
let finalUnorderedList = document.createElement('ul');
let flexDiv = document.createElement('div');

body.appendChild(flexDiv);

flexDiv.style.display = 'flex';

startingListDiv.style.border = '1px solid black';
buttonDiv.style.border = '1px solid black';
finalDiv.style.border = '1px solid black';

startingListDiv.style.height = '100px';
startingListDiv.style.width = '100px';
buttonDiv.style.height = '100px';
buttonDiv.style.width = '100px';
finalDiv.style.height = '100px';
finalDiv.style.width = '100px';

buttonDiv.style.display = 'flex';
buttonDiv.style.flexDirection = 'column';

flexDiv.appendChild(startingListDiv);
flexDiv.appendChild(buttonDiv);
flexDiv.appendChild(finalDiv);

startingListDiv.appendChild(unorderedList);

let bread = document.createElement('li');
let milk = document.createElement('li');
let orange = document.createElement('li');
let tomato = document.createElement('li');

bread.textContent = 'bread';
milk.textContent = 'milk';
orange.textContent = 'orange';
tomato.textContent = 'tomato';

unorderedList.appendChild(bread);
unorderedList.appendChild(milk);
unorderedList.appendChild(orange);
unorderedList.appendChild(tomato);

let moveUp = document.createElement('button');
let moveRight = document.createElement('button');
let deleteBtn = document.createElement('button');
let moveDown = document.createElement('button');

moveUp.textContent = 'Up';
moveRight.textContent = '>';
deleteBtn.textContent = 'X';
moveDown.textContent = 'Down';

buttonDiv.appendChild(moveUp);
buttonDiv.appendChild(moveRight);
buttonDiv.appendChild(deleteBtn);
buttonDiv.appendChild(moveDown);

finalDiv.appendChild(finalUnorderedList);

bread.onclick = () => {
  bread.classList.toggle('selected');
};

milk.onclick = () => {
  milk.classList.toggle('selected');
};

orange.onclick = () => {
  orange.classList.toggle('selected');
};

tomato.onclick = () => {
  tomato.classList.toggle('selected');
};

let listElements = document.querySelectorAll('li');

deleteBtn.onclick = () => {
  for (let i = 0; i < listElements.length; i++) {
    if (listElements[i].classList.contains('selected')) {
      unorderedList.removeChild(listElements[i]);
    }
  }
};

moveRight.onclick = () => {
  for (let i = 0; i < listElements.length; i++) {
    if (listElements[i].classList.contains('selected')) {
      unorderedList.removeChild(listElements[i]);
      finalUnorderedList.appendChild(listElements[i]);
      listElements[i].classList.toggle('selected');
    }
  }
};

moveUp.onclick = () => {
  for (let i = 0; i < listElements.length; i++) {
    if (listElements[i].classList.contains('selected')) {
      unorderedList.insertBefore(listElements[i], listElements[i - 1]);
      listElements[i].classList.toggle('selected');
    }
  }
};

moveDown.onclick = () => {
  for (let i = 0; i < listElements.length; i++) {
    if (listElements[i].classList.contains('selected')) {
      unorderedList.insertBefore(listElements[i + 1], listElements[i]);
      listElements[i].classList.toggle('selected');
    }
  }
};
