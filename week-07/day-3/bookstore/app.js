const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 8080;

let query = 'SELECT book_name FROM book_mast';

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

app.get('/titles', (req, res) =>{
  connection.query(query, (err, result) => {
    if(err){
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}`);
});
