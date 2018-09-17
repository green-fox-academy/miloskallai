const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/doubling', (req, res) => {
  let received = req.query.input;
  if (received) {
    res.json({
      received: received,
      result: received * 2
    });
  } else {
    res.json({
      error: 'Please provide an input!'
    });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name && title) {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (!name) {
    res.json({
      error: 'Please provide a name!'
    });
  } else if (!title) {
    res.json({
      error: 'Please provide a title!'
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  res.json({
    appended: appendable + 'a'
  });
});

app.post('/dountil/:action', jsonParser, (req, res) => {
  let until = parseInt(req.body.until);
  let action = req.params.action;

  if (!until) {
    res.json({
      error: 'Please provide a number!'
    });
  } else {
    if (action === 'sum') {
      let sum = 0;

      for (let i = 0; i <= until; i++) {
        sum += i;
      }

      res.json({
        result: sum
      });
      
    } else if (action === 'factor') {
      let result = 1;
      let count;

      for (count = until; count > 1; count--) {
        result *= count;
      }

      res.json({
        result: result
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`The app is running and listening on port: ${PORT}`);
});