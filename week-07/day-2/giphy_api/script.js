let gifContainer = document.querySelector('.gif-container');
let giphyPreviewURL = [];

function requestListener() {
  let data = JSON.parse(this.responseText);

  let isClicked = true;

  still();

  gifContainer.addEventListener('click', () => {
    isClicked = !isClicked;
    if(!isClicked){
      moveing();
      isClicked = !isClicked;
    } else {
      still();
      isClicked = !isClicked;
    }
  });

  function still() {
    for (let i = 0; i < data.data.length; i++) {
      giphyPreviewURL.push(data.data[i].images.downsized_still.url);
    }

    giphyPreviewURL.reverse();

    for (let i = 0; i < giphyPreviewURL.length; i++) {
      let newImg = document.createElement('img');
      newImg.src = giphyPreviewURL[i];
      gifContainer.appendChild(newImg);
    }
    !isClicked;
  }

  function moveing() {
    for (let i = 0; i < data.data.length; i++) {
      giphyPreviewURL.push(data.data[i].images.downsized_medium.url);
    }

    giphyPreviewURL.reverse();

    for (let i = 0; i < giphyPreviewURL.length; i++) {
      let newImg = document.createElement('img');
      newImg.src = giphyPreviewURL[i];
      gifContainer.appendChild(newImg);
    }
  }
}

function requestError(error) {
  console.log('we have an issue', error);
}

let request = new XMLHttpRequest();
request.onload = requestListener;
request.onerror = requestError;
request.open(
  'GET',
  'http://api.giphy.com/v1/gifs/search?q=dog&api_key=4SmcI5IILeEWdFCqgx1m62hidEv9l49R&limit=16',
  true
);
request.send();
