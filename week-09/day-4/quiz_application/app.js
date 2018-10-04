'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');

const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/assets', express.static('assets'));
app.use('/public', express.static('public'));

/*  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello',
  database: ''
}); 

connection.connect(err => {
  if(err){
    throw err;
  } else {
    console.log('Connected to database');
  }
}); */

app.get('/', (req, res) => {
  res.send('works');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
})


