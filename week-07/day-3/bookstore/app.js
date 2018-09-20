const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');

app.use(cors());

let query =
  'SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello',
  database: 'bookstore'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected');
});

app.get('/', (req, res) => {
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

//SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_id FROM book_mast, author, category WHERE author.aut_id = book_mast.aut_id AND book_mast.cate_id = category.cate_id AND book_mast.pub_id = publisher.pub_id;
