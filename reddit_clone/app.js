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

  connection.query(
    `UPDATE posts SET score = score + 1 WHERE id = ${postID}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        connection.query(
          `SELECT * FROM posts WHERE ID = ${postID}`,
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
    }
  );
});

app.put('/posts/:id/downvote', (req, res) => {
  let postID = req.params.id;

  connection.query(
    `UPDATE posts SET score = score - 1 WHERE id = ${postID}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        connection.query(
          `SELECT * FROM posts WHERE ID = ${postID}`,
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
    }
  );
});

app.delete('/posts/:id', (req, res) => {
  let deleteID = req.params.id;
  connection.query(
    `DELETE FROM posts WHERE id = ${deleteID}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json({
          message: 'Post deleted successfully'
        });
      }
    }
  );
});

app.put('/posts/:id', (req, res) => {
  let postID = req.params.id;
  let newTitle = req.body.title;
  let newUrl = req.body.url;

  connection.query(
    `UPDATE posts SET title = '${newTitle}', url = '${newUrl}' WHERE id = ${postID}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        connection.query(
          `SELECT * FROM posts WHERE ID = ${postID}`,
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
    }
  );
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});
