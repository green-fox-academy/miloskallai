
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/groot', (req, res) => {
  // TODO: implement this method
  let msg = req.query.message;
  if(msg){
    res.json({
      "received" : msg,
      "translated" : "I am Groot!"
    });
  } else {
    res.json({
      "error": "I am Groot!"
    })
  }

});

module.exports = app;