const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 8080;

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port: ${PORT}`);
});
