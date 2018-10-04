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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/index.html'));
});

app.get('/managequestions', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/managequestions.html'));
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
        `SELECT * FROM answers WHERE question_id=${questionId}`,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            let answer = result;
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

app.get('/questions', (req, res) => {
  connection.query('SELECT * FROM questions', (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

/* app.post('/questions', (req, res) => {
  let newQuestion = req.body.question;
  let realQuestionId;

  let questionId = req.body.question_id;
  let answer1 = req.body.answer1;
  let answer2 = req.body.answer2;
  let answer3 = req.body.answer3;
  let answer4 = req.body.answer4;

  let isCorrect1 = req.body.is_correct1; 
  let isCorrect2 = req.body.is_correct2; 
  let isCorrect3 = req.body.is_correct3; 
  let isCorrect4 = req.body.is_correct4; 

}) */

app.delete('/questions/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  connection.query(`DELETE FROM questions WHERE id=${id}`, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.json({ 
        message: `question with ${id} deleted succesfully`
       });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
