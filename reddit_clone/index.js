'use strict'
let url = 'http://localhost:8080/posts';

fetch(url)
.then(response => {
  response.json()
})

  .catch((error) => {
    console.log(error);
  })