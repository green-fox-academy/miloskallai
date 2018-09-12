let animals = document.querySelector('.animals');

let paragraphs = document.querySelectorAll('p');

for(let i = 0; i < paragraphs.length; i++){
  paragraphs[i].innerHTML = '<p class="animals">goat rabbit <strong>cat</strong> dog</p>';
} 