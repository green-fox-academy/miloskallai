let articleContainer = document.querySelector('.articles');
let NYAPI =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f45eececf87f4c92b1c374710846cf34&q=tesla';

function requestListener() {
  let data = JSON.parse(this.responseText);

  for (let i = 0; i < data.response.docs.length; i++) {
    let newHeader = document.createElement('h1');
    let newSnippet = document.createElement('p');
    let newDate = document.createElement('p');

    newHeader.textContent = data.response.docs[i].headline.main;
    newSnippet.textContent = data.response.docs[i].snippet;
    newDate.textContent = data.response.docs[i].pub_date;

    articleContainer.appendChild(newHeader);
    articleContainer.appendChild(newSnippet);
    articleContainer.appendChild(newDate);
  }
}

function requestError(error) {
  console.log('we have an issue', error);
}

let request = new XMLHttpRequest();
request.onload = requestListener;
request.onerror = requestError;
request.open('GET', NYAPI, true);
request.send();
