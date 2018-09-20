const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello',
  database: 'reddit'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

let query = 'SELECT * FROM posts';

connection.query(query, (err, result) => {
  if (err) throw err;

  console.log('Data received from database');
  console.log(result);
});

connection.end();

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.get('/posts', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});
