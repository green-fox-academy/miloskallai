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

app.listen(PORT, () => {
  console.log(`The app is running and listening on port: ${PORT}`);
});