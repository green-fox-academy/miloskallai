const url = 'http://localhost:8080/game';


window.onload = () => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
};
