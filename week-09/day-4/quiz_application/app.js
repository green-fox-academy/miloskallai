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

app.post('/questions', (req, res) => {
  let newQuestion = req.body.question;
  let questionID;
  let answer1 = req.body.answer1;
  let answer2 = req.body.answer2;
  let answer3 = req.body.answer3;
  let answer4 = req.body.answer4;
  let isCorrect1 = req.body.is_correct1;
  let isCorrect2 = req.body.is_correct2;
  let isCorrect3 = req.body.is_correct3;
  let isCorrect4 = req.body.is_correct4;

  if (isCorrect1 === undefined) {
    isCorrect1 = 0;
  } else {
    isCorrect1 = 1;
  }

  if (isCorrect2 === undefined) {
    isCorrect2 = 0;
  } else {
    isCorrect2 = 1;
  }

  if (isCorrect3 === undefined) {
    isCorrect3 = 0;
  } else {
    isCorrect3 = 1;
  }

  if (isCorrect4 === undefined) {
    isCorrect4 = 0;
  } else {
    isCorrect4 = 1;
  }

  let values = {
    question: newQuestion
  };

  connection.query('INSERT INTO questions SET ? ', values, (err, result) => {
    if (err) {
      throw err;
    } else {
      let questionID = result.insertId;

      let answerValues1 = {
        question_id: questionID,
        answer: answer1,
        is_correct: isCorrect1
      };
      connection.query(
        'INSERT INTO answers SET ? ',
        answerValues1,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            let answerValues2 = {
              question_id: questionID,
              answer: answer2,
              is_correct: isCorrect2
            };

            connection.query(
              'INSERT INTO answers SET ? ',
              answerValues2,
              (err, result) => {
                if (err) {
                  throw err;
                } else {
                  let answerValues3 = {
                    question_id: questionID,
                    answer: answer3,
                    is_correct: isCorrect3
                  };
                  connection.query(
                    'INSERT INTO answers SET ? ',
                    answerValues3,
                    (err, result) => {
                      if (err) {
                        throw err;
                      } else {
                        let answerValues4 = {
                          question_id: questionID,
                          answer: answer4,
                          is_correct: isCorrect4
                        };
                        connection.query(
                          'INSERT INTO answers SET ? ',
                          answerValues4,
                          (err, result) => {
                            if (err) {
                              throw err;
                            } else {
                              console.log('Database updated');
                              res.redirect('/');
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  });
});

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
