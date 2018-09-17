'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const PORT = 8080;

app.post('/arrays', jsonParser, (req, res) => {
  let what = req.body.what;
  let numbers = req.body.numbers;

  if (what && numbers) {
    if (what === 'sum') {
      let result = 0;
      numbers.forEach(element => {
        result += element;
      });

      res.json({
        result: result
      });
    } else if (what === 'multiply') {
      let result = 1;
      numbers.forEach(element => {
        result *= element;
      });
      res.json({
        result: result
      });
    } else if (what === 'double') {
      let result = numbers.map(x => x * 2);

      res.json({
        result: result
      });
    }
  } else {
    res.json({
      error: 'Please provide what to do with the numbers!'
    });
  }
});

app.listen(PORT, () => {
  console.log(`The app is running and listening on port ${PORT}`);
});
