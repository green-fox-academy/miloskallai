'use strict'

const url = 'http://localhost:8080/posts';
const inputTitle = document.querySelector('.title');
const inputURL = document.querySelector('.url');
let urlId = parseInt(window.location.pathname.match(/\d+/g).map(Number)[0]);
const form = document.querySelector('form');
const button = document.querySelector('button');

fetch(url)
.then(response => {
  return response.json();
})
.then(data => {
  let posts = data.posts;
  for(let i = 0; i < posts.length; i++){
    if(posts[i].id === urlId){
      inputTitle.value = posts[i].title;
      inputURL.value = posts[i].url;

    }
  }
})

form.method="POST"
form.action = `http://localhost:8080/posts/${urlId}?_method=PUT`;
form.enctype="application/json"
