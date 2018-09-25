let btn = document.querySelector('button');
let h1 = document.querySelector('h1');

btn.addEventListener('click', () => {
  setTimeout(() => {
    h1.innerHTML = '2 seconds ellapsed';
  }, 2000);
});
