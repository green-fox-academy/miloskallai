'use strict'

const url = 'http://localhost:8080/posts';
const inputTitle = document.querySelector('.title');
const inputURL = document.querySelector('.url');

fetch(url)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})

/*
inputTitle.value = 
inputURL.value = 
*/