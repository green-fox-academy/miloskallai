const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());

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
        posts: result
      });
    }
  });
});

app.post('/posts', (req, res) => {
  let postTitle = req.body.title;
  let postURL = req.body.url;
  //select * from posts where id = 21;
  let query = `INSERT INTO posts(title, url) VALUES ('${postTitle}', '${postURL}')`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      let insertID = result.insertId;
      connection.query(
        `SELECT * FROM posts WHERE ID = ${insertID}`,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            res.json({
              posts: result
            });
          }
        }
      );
    }
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  let postID = req.params.id;
  console.log(postID);
  let voteValue = 1;
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});
