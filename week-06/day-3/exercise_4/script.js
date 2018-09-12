let paragraphs = document.querySelectorAll('p');
let apple = document.querySelector('.apple');
let cat = document.querySelector('.cat');
let balloonClass = document.querySelector('.balloon');

if(paragraphs[3].classList.contains('dolphin')){
  apple.textContent = 'pear';
} 

if(paragraphs[0].classList.contains('apple')){
  cat.textContent = 'dog';
}

apple.classList.add('red');

balloonClass.style.borderRadius = '2%';
