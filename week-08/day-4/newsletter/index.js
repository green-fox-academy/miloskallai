const url = 'http://localhost:3000/singup';

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
  //event.preventDefault();
});
