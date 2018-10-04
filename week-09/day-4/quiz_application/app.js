'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');

const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/assets', express.static('assets'));
app.use('/public', express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello',
  database: 'quiz_app'
});

connection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to database');
  }
});

app.get('/game', (req, res) => {
  connection.query('SELECT * FROM questions', (err, result) => {
    if (err) {
      throw err;
    } else {
      let randomQuestionNumber = Math.floor(Math.random() * result.length);
      let question = result[randomQuestionNumber];
      let questionId = result[randomQuestionNumber].id;

      connection.query(
        `SELECT * FROM answers WHERE id=${questionId}`,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            let answer = result[0];
            res.json({
              question: question,
              answer: answer
            });
          }
        }
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
