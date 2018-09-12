const kids = [
  { petName: 'Wattled crane', owner: 'Bryant' },
  { petName: 'Devil, tasmanian', owner: 'Alejandro' },
  { petName: 'Mynah, common', owner: 'Nelie' },
  { petName: 'Dolphin, common', owner: 'Mariele' },
  { petName: 'Gray duiker', owner: 'Maddalena' },
  { petName: 'Crab (unidentified)', owner: 'Lucine' },
  { petName: 'Ant (unidentified)', owner: 'Lorianna' },
  { petName: 'Bison, american', owner: 'Tommie' },
  { petName: 'Yellow mongoose', owner: 'Vivyan' },
  { petName: 'Carpet snake', owner: 'Veda' },
  { petName: 'Lesser mouse lemur', owner: 'Isidor' }
];

let pets = document.querySelector('#pets');
let newArticle = document.createElement('article');
pets.appendChild(newArticle);

for (let i = 0; i < kids.length; i++) {
  let newArticle = document.createElement('article');
  pets.appendChild(newArticle);

  let newHeader = document.createElement('h3');
  let newParagraph = document.createElement('p');

  newHeader.textContent = kids[i].owner;
  newParagraph.textContent = kids[i].petName;

  newArticle.appendChild(newHeader);
  newArticle.appendChild(newParagraph);

}
