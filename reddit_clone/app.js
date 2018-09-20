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

app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json({
        "posts": result,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});
