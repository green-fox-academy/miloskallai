const express = require('express');
const app = express();
const path = require('path');
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
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (!name){
    res.json({
      error: 'Please provide a name!'
    });
  } else if(!title){
    res.json({
      error: 'Please provide a title!'
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  res.json({
    "appended": appendable + 'a'
  });
});

app.listen(PORT, () => {
  console.log(`The app is running and listening on port: ${PORT}`);
});
