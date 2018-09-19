let table = document.querySelector('table');

function requestListener() {
  let data = JSON.parse(this.responseText);

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    td.textContent = data[i].book_name;
    tr.appendChild(td);
    table.appendChild(tr);

  }
}

function requestError(error) {
  console.log('We have an issue', error);
}

let request = new XMLHttpRequest();
request.onload = requestListener;
request.onerror = requestError;
request.open('GET', 'http://localhost:8080/titles', true);

request.send();
