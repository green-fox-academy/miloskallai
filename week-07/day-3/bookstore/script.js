let bookName = document.querySelector('.book-name');
let bookAuthor = document.querySelector('.book-author');
let bookCategory = document.querySelector('.book-category');
let bookPublisher = document.querySelector('.book-publisher');
let bookPrice = document.querySelector('.book-price');


function requestListener() {
  let data = JSON.parse(this.responseText);
  let tableHead = Object.keys(data[0]);

  let tableValues = Object.values(data[0]);

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    td.textContent = data[i].book_name;
    tr.appendChild(td);
    bookName.appendChild(tr);
  }

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    td.textContent = data[i].aut_name;
    tr.appendChild(td);
    bookAuthor.appendChild(tr);
  }

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    td.textContent = data[i].cate_descrip;
    tr.appendChild(td);
    bookCategory.appendChild(tr);
  }

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    td.textContent = data[i].pub_name;
    tr.appendChild(td);
    bookPublisher.appendChild(tr);
  }

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    td.textContent = data[i].book_price;
    tr.appendChild(td);
    bookPrice.appendChild(tr);
  }

console.log(data);

}

function requestError(error) {
  console.log('We have an issue', error);
}

let request = new XMLHttpRequest();
request.onload = requestListener;
request.onerror = requestError;
request.open('GET', 'http://localhost:8080/', true);

request.send();
